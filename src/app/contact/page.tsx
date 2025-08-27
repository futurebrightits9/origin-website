import { ContactForm } from './ContactForm';
import { Mail, Phone, MapPin, Code, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 relative">
        <div className="absolute top-0 right-4 flex gap-4">
          <Button asChild>
            <Link href="#development-query">
              <Code className="mr-2" /> For Development Work
            </Link>
          </Button>
          <Button asChild>
            <Link href="#training-query">
              <Briefcase className="mr-2" /> For Training Purpose
            </Link>
          </Button>
        </div>
        <div className="text-center pt-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Get in Touch</h1>
        </div>
        <div className="pt-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-headline">Contact Information</h2>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground">futurebrightits9@gmail.com</p>
                <a href="mailto:futurebrightits9@gmail.com" className="text-primary hover:underline">Send an email</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-muted-foreground">+91 12345 67890</p>
                 <a href="tel:+911234567890" className="text-primary hover:underline">Call us</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-muted-foreground">123 Tech Park, Innovation Hub, Nashik, Maharashtra, 422001, India</p>
              </div>
            </div>
          </div>
          
          <div id="training-query" className="bg-card p-8 rounded-lg shadow-xl">
             <h2 className="text-3xl font-bold font-headline mb-6">Get a Personalized Learning Path</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
