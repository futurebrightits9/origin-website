import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  { name: "Akash Raut", role: "Director", bio: "Visionary leader with a passion for technology and education.", initials: "AR" },
  { name: "Pooja Dalavi", role: "Director", bio: "Expert in curriculum design and student mentorship.", initials: "PD" },
  { name: "Rutik Dugad", role: "Co-founder", bio: "Specializes in software architecture and development.", initials: "RD" },
  { name: "Navanath Dalavi", role: "Co-founder", bio: "Drives operational excellence and strategic growth.", initials: "ND" },
  { name: "Umesh Sanap", role: "Co-founder", bio: "Leads our industry partnership and placement initiatives.", initials: "US" },
];

export default function TeamPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Leadership</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team behind FutureBright IT Solutions Pvt. Ltd.'s success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center">
                <Avatar className="h-24 w-24 mb-4 text-2xl">
                  <AvatarImage src={`https://source.boringavatars.com/beam/120/${member.name.replace(/\s/g, '')}?colors=29ABE2,E5F6FD,29E2D4`} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
