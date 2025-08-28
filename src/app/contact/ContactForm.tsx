"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormStatus } from 'react-dom';
import { useToast } from "@/hooks/use-toast"

import { submitContactForm } from '@/app/actions';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  gmail: z.string().email("Please enter a valid email address."),
  contactNumber: z.string().min(10, "Please enter a valid 10-digit contact number.").max(15),
  visitingPurpose: z.string().min(3, "Purpose must be at least 3 characters."),
  messageQuery: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must not exceed 500 characters."),
});

type FormValues = z.infer<typeof formSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        "Submit"
      )}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast()
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gmail: "",
      contactNumber: "",
      visitingPurpose: "",
      messageQuery: "",
    },
  });

  const action = async (formData: FormData) => {
    const result = await submitContactForm(formData);
    if (result?.error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: result.error,
      })
    } else {
        toast({
            title: "Thank You!",
            description: "Your message has been sent. We'll be in touch soon.",
        })
        form.reset();
    }
  }

  return (
    <Form {...form}>
      <form action={action} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gmail</FormLabel>
              <FormControl>
                <Input placeholder="e.g. john.doe@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input placeholder="e.g. 9876543210" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="visitingPurpose"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Visiting Purpose</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Training Inquiry, Business Meeting" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="messageQuery"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Query / Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us how we can help." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  );
}
