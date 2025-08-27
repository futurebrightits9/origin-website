import Image from 'next/image';
import { Building, Target, Users } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">About FutureBright IT Solutions Pvt. Ltd.</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between academics and the IT industry, helping students transform into confident professionals.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-foreground/80">
            <p>
              Our company not only builds powerful software solutions but also focuses on training students with industry-relevant skills. Along with technical expertise, we ensure students improve their soft skills to be job-ready.
            </p>
            <p>
              We believe in a career-oriented approach, offering both hands-on coding experience and professional development sessions.
            </p>
            <p>
              Our mission is to bridge the gap between academics and the IT industry, helping students transform into confident professionals.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
             <Image 
              src="https://picsum.photos/800/600?random=10"
              data-ai-hint="team meeting" 
              alt="Our Team" 
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="mt-24">
           <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                        <Building className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-headline mb-2">Industry-Relevant Solutions</h3>
                    <p className="text-muted-foreground">We build powerful software and teach the skills that matter in the real world.</p>
                </div>
                <div className="p-6">
                    <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                        <Target className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-headline mb-2">Career-Oriented Approach</h3>
                    <p className="text-muted-foreground">Our focus is on making you job-ready, from technical skills to professional polish.</p>
                </div>
                <div className="p-6">
                    <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                        <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-headline mb-2">Student Transformation</h3>
                    <p className="text-muted-foreground">We are committed to helping students grow into confident, capable IT professionals.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
