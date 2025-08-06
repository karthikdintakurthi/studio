import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Globe, Target, Lightbulb } from 'lucide-react';

const teamMembers = [
  {
    name: "Prananya Chilamkurty",
    role: "Founder & President",
    image: "https://storage.googleapis.com/stabl-media/team-images/sarah.png",
    fallback: "PC",
    bio: "Prananya started SHIFT after noticing how many of her peers relied on sugary drinks to get through the day. She's passionate about holistic wellness and community building.",
  },
  {
    name: "Jeevel Kaur",
    role: "Head of Events",
    image: "https://storage.googleapis.com/stabl-media/team-images/david.png",
    fallback: "JK",
    bio: "Jeevel organizes all of our workshops and community fairs. She believes that learning about health should be fun, interactive, and accessible to everyone.",
  },
  {
    name: "Emily Rodriguez",
    role: "Content & Social Media Lead",
    image: "https://storage.googleapis.com/stabl-media/team-images/emily.png",
    fallback: "ER",
    bio: "Emily crafts our story online, sharing recipes, tips, and student stories. She's a creative force who loves connecting with the community on social media.",
  },
    {
    name: "Michael Johnson",
    role: "Campus Outreach Coordinator",
    image: "https://storage.googleapis.com/stabl-media/team-images/michael.png",
    fallback: "MJ",
    bio: "Michael works to bring SHIFT to more schools. He's dedicated to building a nationwide network of students who are passionate about making healthier choices.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The Story of SHIFT
            </h1>
            <p className="text-lg text-foreground/80 md:text-xl">
              We are a student-led initiative dedicated to promoting wellness and mindful consumption. We're not about restriction; we're about positive substitution.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://healthy.ucdavis.edu/sites/g/files/dgvnsk7626/files/styles/sf_landscape_16x9/public/media/images/spa%20water2.png?h=ab949e0b&itok=AsMOYGsa"
              data-ai-hint="students team diverse"
              alt="A diverse group of students collaborating on the SHIFT initiative."
              width={600}
              height={400}
              className="aspect-video w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl font-bold font-headline">Our Mission</h3>
                <p className="mt-2 text-foreground/70">To empower students to make healthier, more mindful drink choices by providing delicious alternatives, fostering a supportive community, and sharing knowledge.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl font-bold font-headline">Our Vision</h3>
                <p className="mt-2 text-foreground/70">We envision a campus culture where wellness is a priority, and students are equipped with the tools and support to thrive, one healthy sip at a time.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl font-bold font-headline">Our Approach</h3>
                <p className="mt-2 text-foreground/70">We focus on education, not elimination. By showcasing tasty and beneficial alternatives, we make the shift to a healthier lifestyle feel exciting and achievable.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Team</h2>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              We're a group of passionate students dedicated to making a difference.
            </p>
          </div>
          <div className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="h-full text-center">
                <CardContent className="flex h-full flex-col items-center justify-start p-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.fallback}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
                  <p className="font-semibold text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-foreground/70">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
