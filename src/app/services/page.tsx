import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, Code, Globe, Smartphone, BarChart, PenTool } from 'lucide-react';

const trainingPrograms = [
  { title: "Python Development", description: "Learn how to build powerful and dynamic web applications using Python and Django. This training covers Python basics, Django framework, database handling, authentication, and project deployment — helping you create real-world websites and apps with ease." },
  { title: "Generative AI (GenAI)", description: "Explore the power of Generative AI to create text, images, and smart applications. Learn prompt engineering, model integration, and real-world use cases to build next-gen AI solutions." },
  { title: "DevOps", description: "CI/CD pipelines, Docker, Kubernetes, and cloud deployment." },
  { title: "Data Structures & Algorithms (DSA)", description: "Problem-solving skills to crack coding interviews." },
  { title: "Data Science", description: "Data analysis, machine learning, and visualization." },
  { title: "Prompt Engineering", description: "Mastering prompts for AI tools to maximize productivity." },
];

const softSkills = ["Communication skills", "Public speaking", "Resume & interview preparation", "Corporate etiquette"];
const jobPrep = ["Guidance for job portals (LinkedIn, Naukri, Indeed)", "Mock interviews with experts", "Resume building workshops", "Personality development sessions"];

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Programs & Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive suite of training and development services designed to make you industry-ready.
          </p>
        </div>

        <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Custom Software Development Card */}
                <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Code className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold font-headline">Custom Software Development</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">
                        We build bespoke software solutions tailored to your unique business needs, from concept to deployment.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />Tailored to your requirements.</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />Built with modern technology.</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />User-centric design focus.</li>
                    </ul>
                </div>

                {/* Web Design & Development Card */}
                <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Globe className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold font-headline">Web Design & Development</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">
                        We create stunning, responsive websites optimized for performance and search engines.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />Responsive for all devices.</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />SEO-friendly architecture.</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />E-commerce & CMS solutions.</li>
                    </ul>
                </div>

                {/* Mobile App Development Card */}
                <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Smartphone className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold font-headline">Mobile App Development</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">
                        Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />iOS and Android expertise.</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />Performance-optimized.</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />Scalable & secure backends.</li>
                    </ul>
                </div>
            </div>
             <div className="mt-8 flex justify-start">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* UI/UX Design Card */}
                    <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <PenTool className="h-8 w-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold font-headline">UI/UX Design</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            Crafting intuitive and engaging user interfaces that enhance user satisfaction and drive results.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />User research & wireframing.</li>
                            <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />Interactive prototyping.</li>
                            <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />Visually stunning mockups.</li>
                        </ul>
                    </div>

                    {/* Data Analytics & Business Intelligence Card */}
                    <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <BarChart className="h-8 w-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold font-headline">Data Analytics & BI</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            Transforming raw data into actionable insights with powerful dashboards and reporting tools.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />Data visualization dashboards.</li>
                            <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />Predictive analytics.</li>
                            <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />Custom reporting solutions.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="w-full">
          <h2 className="text-2xl font-headline font-bold text-center mb-8">Training Programs</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {trainingPrograms.map((program, index) => (
              <AccordionItem value={`item-${index}`} key={program.title} className="bg-card border-none rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <AccordionTrigger className="text-xl font-headline px-6 py-4 hover:no-underline">
                  {program.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground px-6 pb-4">{program.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="w-full mt-16">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl font-headline font-bold">Soft Skills Development</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pt-4 pl-2">
                  {softSkills.map(skill => (
                    <li key={skill} className="flex items-center text-lg">
                      <Check className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl font-headline font-bold">Job Preparation & Placement</AccordionTrigger>
              <AccordionContent>
                 <ul className="space-y-3 pt-4 pl-2">
                  {jobPrep.map(prep => (
                    <li key={prep} className="flex items-center text-lg">
                      <Check className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                      <span>{prep}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
