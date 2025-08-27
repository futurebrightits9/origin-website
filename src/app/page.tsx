"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Code, Star, Mic, BookOpen, Award, Calendar, Camera, Palette, Smartphone, Globe, Cog, Search, DollarSign, Layers } from 'lucide-react';

const taglines = [
  "Empowering Students with Technology, Training & Transformation.",
  "Your Career, Our Commitment.",
  "From Learning to Earning – We Make It Possible.",
  "Building Software, Building Careers.",
  "Training Tomorrow’s Tech Leaders Today."
];

const heroImages = [
  { src: "https://picsum.photos/1920/1080?random=20", hint: "success motivation" },
  { src: "https://picsum.photos/1920/1080?random=21", hint: "tech workspace" },
  { src: "https://picsum.photos/1920/1080?random=22", hint: "focused developer" },
  { src: "https://picsum.photos/1920/1080?random=23", hint: "team achievement" },
  { src: "https://picsum.photos/1920/1080?random=24", hint: "innovative technology" },
];

const softwareDevelopmentItems = [
  { icon: Layers, text: "Latest Technology Stack" },
  { icon: Palette, text: "User-Centric Designs" },
  { icon: Smartphone, text: "Cross-Platform Expertise" },
  { icon: CheckCircle, text: "Quality Assurance & Testing" },
  { icon: DollarSign, text: "Affordable & Transparent Pricing" },
];

const itTrainingItems = [
  { icon: Users, text: "Experienced Trainers from IT Industry" },
  { icon: Code, text: "100% Practical-Oriented Training" },
  { icon: Award, text: "Career Guidance & Mock Interviews" },
  { icon: BookOpen, text: "Hands-on Live Projects" },
  { icon: Star, text: "Placement Support" },
];

const successStories = [
  { name: "Priya Sharma", story: "Thanks to TechRoute, I landed my dream job at a top MNC. The practical training was invaluable!", company: "Innovate Inc." },
  { name: "Rahul Verma", story: "The DSA course was a game-changer. I cracked multiple interviews and got a great offer.", company: "Tech Solutions" },
  { name: "Anjali Singh", story: "The soft skills training helped me immensely in presenting myself confidently during interviews.", company: "Future Corp" },
];

const galleryImages = [
  { src: "https://picsum.photos/600/400?random=1", alt: "Training session", hint: "students learning" },
  { src: "https://picsum.photos/600/400?random=2", alt: "Workshop in progress", hint: "workshop classroom" },
  { src: "https://picsum.photos/600/400?random=3", alt: "Seminar event", hint: "tech seminar" },
  { src: "https://picsum.photos/600/400?random=4", alt: "Students collaborating", hint: "team collaboration" },
];

const upcomingEvents = [
  { title: "Annual Hackathon 'Code-Fest 2024'", date: "December 15, 2024" },
  { title: "Workshop on Advanced Prompt Engineering", date: "January 5, 2025" },
  { title: "Career Guidance Session with Industry Experts", date: "January 20, 2025" },
];

export default function Home() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const taglineTimer = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    const imageTimer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => {
        clearInterval(taglineTimer);
        clearInterval(imageTimer);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image 
          key={currentHeroImage}
          src={heroImages[currentHeroImage].src} 
          data-ai-hint={heroImages[currentHeroImage].hint} 
          layout="fill" 
          objectFit="cover" 
          alt="Hero background" 
          className="absolute inset-0 z-0 brightness-50 animate-fade-in" 
        />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-4 animate-fade-in-down">
            Unlock Your Tech Potential
          </h1>
          <div className="h-14 flex items-center justify-center">
            <p className="text-lg md:text-2xl text-white transition-opacity duration-1000 ease-in-out">
              {taglines[currentTagline]}
            </p>
          </div>
          <Button asChild size="lg" className="mt-8 transform hover:scale-105 transition-transform duration-300">
            <Link href="/services">Explore Courses</Link>
          </Button>
        </div>
      </section>

      <section id="why-choose-us" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Why Choose Us?</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">For Software & Website Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {softwareDevelopmentItems.map((item, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-3">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-lg leading-tight">{item.text}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">For IT Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {itTrainingItems.map((item, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-3">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-lg leading-tight">{item.text}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section id="success-stories" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="pt-6">
                  <Star className="text-yellow-400 fill-yellow-400 mb-2" />
                  <p className="italic mb-4">&quot;{story.story}&quot;</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <p className="font-bold font-headline">{story.name}</p>
                  <p className="text-sm text-muted-foreground">Placed at {story.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="gallery" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                 <Image src={image.src} data-ai-hint={image.hint} width={600} height={400} alt={image.alt} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Upcoming Events</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <li key={index} className="p-4 border rounded-lg flex items-center gap-4 hover:bg-secondary transition-colors duration-200">
                  <Calendar className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
