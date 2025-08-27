
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from "@/hooks/use-toast"

import { generateLearningPathAction } from '@/app/actions';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  candidateName: z.string().min(2, "Name must be at least 2 characters."),
  candidateGmail: z.string().email("Please enter a valid email address."),
  candidateContactNumber: z.string().min(10, "Please enter a valid 10-digit contact number.").max(15),
  courseInterestedIn: z.enum(['Python', 'GenAI', 'DevOps', 'DSA', 'Data Science', 'Soft Skills']),
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
          Generating Path...
        </>
      ) : (
        "Register Now to Kickstart Your Career 🚀"
      )}
    </Button>
  );
}


export function ContactForm() {
  const { toast } = useToast()
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      candidateName: "",
      candidateGmail: "",
      candidateContactNumber: "",
      courseInterestedIn: "Python",
      messageQuery: "",
    },
  });

  const action: (formData: FormData) => Promise<void> = async (formData) => {
    const result = await generateLearningPathAction(formData);
    if (result?.error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: result.error,
      })
    }
  }

  return (
    <Form {...form}>
      <form action={action} className="space-y-6">
        <FormField
          control={form.control}
          name="candidateName"
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
          name="candidateGmail"
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
          name="candidateContactNumber"
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
          name="courseInterestedIn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Interested In</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Python">Python</SelectItem>
                  <SelectItem value="GenAI">GenAI</SelectItem>
                  <SelectItem value="DevOps">DevOps</SelectItem>
                  <SelectItem value="DSA">DSA</SelectItem>
                  <SelectItem value="Data Science">Data Science</SelectItem>
                  <SelectItem value="Soft Skills">Soft Skills</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="messageQuery"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message / Query</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about your goals or any questions you have." {...field} />
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
