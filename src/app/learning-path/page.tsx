import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Lightbulb } from "lucide-react";

export default function LearningPathPage({ searchParams }: { searchParams: { path?: string } }) {
  const learningPath = searchParams.path;

  if (!learningPath) {
    return (
      <div className="container mx-auto py-24 px-4 text-center">
        <Card className="max-w-2xl mx-auto p-8">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-destructive">No Learning Path Generated</CardTitle>
            <CardDescription>
              It seems there was an issue, or you've landed here directly. Please submit the form to get your personalized path.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/contact">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go to Contact Page
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const pathSteps = learningPath.split('\n').filter(line => line.trim() !== '' && line.match(/^\d+\./));

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <Card className="shadow-2xl border-primary/20">
          <CardHeader className="text-center">
             <div className="inline-block bg-primary/10 p-4 rounded-full mb-4 mx-auto w-fit">
                <Lightbulb className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="font-headline text-3xl md:text-4xl text-primary">Your Personalized Learning Path</CardTitle>
            <CardDescription className="text-lg">
              Here is a custom-tailored plan to help you achieve your career goals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4 list-decimal list-inside text-lg">
              {pathSteps.map((step, index) => (
                <li key={index} className="pl-2 leading-relaxed text-foreground/90">
                  <span className="font-semibold">{step.substring(step.indexOf(' ') + 1)}</span>
                </li>
              ))}
            </ol>
          </CardContent>
          <CardFooter className="flex justify-center mt-6">
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
