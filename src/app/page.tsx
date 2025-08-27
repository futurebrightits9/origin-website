
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Code, Star, Palette, Smartphone, Layers, DollarSign } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const taglines = [
  "Empowering Students with Technology, Training & Transformation.",
  "Your Career, Our Commitment.",
  "From Learning to Earning – We Make It Possible.",
  "Building Software, Building Careers.",
  "Training Tomorrow’s Tech Leaders Today."
];

const heroImages = [
  { src: "https://picsum.photos/1920/1080?random=25", hint: "working employee" },
  { src: "https://picsum.photos/1920/1080?random=26", hint: "studying students" },
  { src: "https://picsum.photos/1920/1080?random=27", hint: "computer background" },
  { src: "https://picsum.photos/1920/1080?random=28", hint: "tech office" },
  { src: "https://picsum.photos/1920/1080?random=29", hint: "developer coding" },
];

const softwareDevelopmentItems = [
    {
        icon: Layers,
        text: "Latest Technology Stack",
        details: "We used below new Technology Stack for software or any website development.\n- Frontend: React.js\n- Backend: Python (Django)\n- Mobile Apps: Flutter, React Native\n- Databases: MySQL, PostgreSQL, MongoDB, Firebase\n- Cloud & DevOps: AWS, Google Cloud, Docker, - Kubernetes, CI/CD\n- AI & Automation: Generative AI, ChatGPT, Machine Learning"
    },
    {
        icon: Palette,
        text: "User-Centric Designs",
        details: "We design with users in mind — simple, engaging, and seamless experiences.\n- Intuitive UI/UX – Clean & easy to use\n- Responsive Layouts – Mobile to desktop ready\n- Engaging Visuals – Modern & attractive\n- Accessible – Inclusive for all users\n- Optimized – Fast & smooth performance\n- Feedback Driven – Improved with real users"
    },
    {
        icon: Smartphone,
        text: "Cross-Platform Expertise",
        details: "We build solutions that work seamlessly across web, mobile, and desktop.\n- Unified Experience – Consistent look & feel everywhere\n- Multi-Device Ready – Websites, apps, and software for all platforms\n- Seamless Integration – Smooth data flow across devices\n- Wider Reach – Engage users on Android, iOS, and web"
    },
    {
        icon: CheckCircle,
        text: "Quality Assurance & Testing",
        details: "We ensure every project is reliable, bug-free, and performance-optimized through rigorous testing.\n- Comprehensive Testing – Functional, performance & security checks\n- Bug-Free Delivery – Detect & fix issues before launch\n- High Reliability – Stable systems that users can trust\n- Continuous QA – Ongoing monitoring & improvements"
    },
    {
        icon: DollarSign,
        text: "Affordable & Transparent Pricing",
        details: "We deliver high-quality solutions at fair prices with no hidden costs.\n- Cost-Effective – Value-driven services within budget\n- Clear Estimates – Upfront pricing, no surprises\n- Flexible Plans – Options for startups to enterprises\n- Maximum ROI – Quality solutions that pay off"
    },
];

const itTrainingItems = [
    {
        icon: Users,
        text: "Experienced Trainers from IT Industry",
        details: "Learn from professionals who bring real-world IT expertise to the classroom.\n- Industry Experts – Trainers with proven IT experience\n- Practical Knowledge – Skills gained from real projects\n- Career Guidance – Insights beyond textbooks\n- Mentorship – Personalized support for every learner"
    },
    {
        icon: Code,
        text: "100% Practical-Oriented Training",
        details: "Hands-on training with real projects to turn knowledge into skills.\n- Live Projects – Work on industry-based case studies\n- Do & Learn – Focus on practice, not just theory\n- Problem-Solving – Real coding challenges & scenarios\n- Job-Ready Skills – Learn what companies actually need"
    },
    {
        icon: Star,
        text: "Career Guidance & Mock Interviews",
        details: "Your career success is our goal. We provide comprehensive career support, including personalized guidance, resume building workshops, and mock interviews conducted by industry experts to help you build confidence and ace your job applications."
    },
    {
        icon: Code,
        text: "Hands-on Live Projects",
        details: "Gain invaluable experience by working on live, industry-standard projects. This hands-on approach allows you to apply your skills in a real-world context, build a strong portfolio, and understand the complete software development lifecycle from start to finish."
    },
    {
        icon: Star,
        text: "Placement Support",
        details: "Our commitment extends to helping you secure your dream job. We offer dedicated placement support, connecting you with our network of partner companies and providing you with the resources and preparation needed to succeed in the competitive job market."
    },
];

const successStories = [
  { name: "Priya Sharma", story: "Thanks to FutureBright IT Solutions Pvt. Ltd., I landed my dream job at a top MNC. The practical training was invaluable!", company: "Innovate Inc." },
  { name: "Rahul Verma", story: "The DSA course was a game-changer. I cracked multiple interviews and got a great offer.", company: "Tech Solutions" },
  { name: "Anjali Singh", story: "The soft skills training helped me immensely in presenting myself confidently during interviews.", company: "Future Corp" },
  { name: "Suresh Gupta", story: "The GenAI course opened up a whole new career path for me. I'm now working on cutting-edge AI projects.", company: "Data Dynamics" },
  { name: "Meera Desai", story: "I always struggled with DevOps concepts, but the hands-on projects at FutureBright IT Solutions Pvt. Ltd. made everything clear. Now I'm a confident DevOps Engineer.", company: "CloudNet" },
  { name: "Rajesh Kumar", story: "The placement support was fantastic. They helped me build my resume and prepare for interviews, which led to a great job.", company: "InfoSystems" },
  { name: "Sunita Patil", story: "The Python course was excellent. The projects were challenging and prepared me well for my developer role.", company: "CodeGenius" },
];

const galleryImages = [
  { src: "https://picsum.photos/600/400?random=1", alt: "IT office with employees", hint: "working office" },
  { src: "https://picsum.photos/600/400?random=2", alt: "Developer at computer", hint: "developer coding" },
  { src: "https://picsum.photos/600/400?random=3", alt: "Team meeting in office", hint: "team meeting" },
  { src: "https://picsum.photos/600/400?random=4", alt: "Collaborating at desk", hint: "office collaboration" },
  { src: "https://picsum.photos/600/400?random=5", alt: "Woman coding at desk", hint: "woman coding" },
  { src: "https://picsum.photos/600/400?random=6", alt: "Office environment", hint: "tech office" },
  { src: "https://picsum.photos/600/400?random=7", alt: "Brainstorming session", hint: "team brainstorming" },
  { src: "https://picsum.photos/600/400?random=8", alt: "Employee working on laptop", hint: "laptop working" },
];


export default function Home() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [openPopover, setOpenPopover] = useState<string | null>(null);

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
                <Popover key={item.text} open={openPopover === item.text} onOpenChange={(isOpen) => setOpenPopover(isOpen ? item.text : null)}>
                  <PopoverTrigger asChild>
                    <div onMouseEnter={() => setOpenPopover(item.text)} onMouseLeave={() => setOpenPopover(null)}>
                      <Card className="text-center p-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                        <CardHeader className="flex flex-col items-center">
                          <div className="bg-primary/10 p-3 rounded-full mb-3">
                            <item.icon className="h-8 w-8 text-primary" />
                          </div>
                          <CardTitle className="font-headline text-lg leading-tight">{item.text}</CardTitle>
                        </CardHeader>
                      </Card>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 whitespace-pre-wrap">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        {item.text === "Latest Technology Stack" || item.text === "User-Centric Designs" || item.text === "Cross-Platform Expertise" || item.text === "Quality Assurance & Testing" || item.text === "Affordable & Transparent Pricing" ? (
                          <div className="text-sm text-muted-foreground">
                            <p className="text-foreground font-semibold">
                              {item.details.split('\n')[0]}
                            </p>
                            <p>{item.details.split('\n').slice(1).join('\n')}</p>
                          </div>
                        ) : (
                          <>
                            <h4 className="font-medium leading-none">{item.text}</h4>
                            <p className="text-sm text-muted-foreground">
                              {item.details}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">For IT Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {itTrainingItems.map((item, index) => (
                 <Popover key={item.text} open={openPopover === item.text} onOpenChange={(isOpen) => setOpenPopover(isOpen ? item.text : null)}>
                    <PopoverTrigger asChild>
                      <div onMouseEnter={() => setOpenPopover(item.text)} onMouseLeave={() => setOpenPopover(null)}>
                        <Card className="text-center p-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                          <CardHeader className="flex flex-col items-center">
                            <div className="bg-primary/10 p-3 rounded-full mb-3">
                              <item.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-lg leading-tight">{item.text}</CardTitle>
                          </CardHeader>
                        </Card>
                      </div>
                    </PopoverTrigger>
                  <PopoverContent className="w-80 whitespace-pre-wrap">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">
                            <p className="text-foreground font-semibold">
                              {item.details.split('\n')[0]}
                            </p>
                            <p>{item.details.split('\n').slice(1).join('\n')}</p>
                          </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
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
    </div>
  );
}

    

    