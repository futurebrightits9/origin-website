import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check } from 'lucide-react';

const trainingPrograms = [
  { title: "Python Development", description: "Learn Python from basics to advanced with real-world projects." },
  { title: "Generative AI (GenAI)", description: "Hands-on with AI tools, ChatGPT, LLMs, and prompt engineering." },
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
            We offer a comprehensive suite of training programs designed to make you industry-ready from day one.
          </p>
        </div>
        
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-4xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-headline font-bold">🎓 Training Programs</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {trainingPrograms.map(program => (
                  <Card key={program.title} className="hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl font-headline font-bold">🧑‍💼 Soft Skills Development</AccordionTrigger>
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
            <AccordionTrigger className="text-2xl font-headline font-bold">🔎 Job Preparation & Placement</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 pt-4 pl-2">
                {jobPrep.map(item => (
                  <li key={item} className="flex items-center text-lg">
                    <Check className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
