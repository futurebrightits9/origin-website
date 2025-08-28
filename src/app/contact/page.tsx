import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Get in Touch</h1>
        </div>
        <div className="pt-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
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
                <p className="text-muted-foreground">+91 7498343978</p>
                 <a href="tel:+917498343978" className="text-primary hover:underline">Call us</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-muted-foreground">Above Shree Cement, 7th Floor Business Bay JITO, Mumbai Naka, Nashik - 422001</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold font-headline mb-4">Find us on the Map</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                 <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.522271810577!2d73.7744389758782!3d19.98659192257088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb8d4a434b9d%3A0x854c609568916961!2sBUSINESS%20BAY%2C%20JITO!5e0!3m2!1sen!2sin!4v1722421369305!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xl">
             <h2 className="text-2xl font-bold font-headline mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
          
        </div>
      </div>
    </div>
  );
}
