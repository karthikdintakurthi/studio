import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Map, Sparkles, Users } from 'lucide-react';
import AIDrinkSuggester from '@/components/ai-drink-suggester';

const values = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Informed Choices",
    description: "Empowering students with knowledge about healthier drink options.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Community",
    description: "Building a supportive network of students passionate about wellness.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Positive Change",
    description: "Celebrating every small step towards a healthier lifestyle.",
  },
  {
    icon: <Map className="h-8 w-8 text-primary" />,
    title: "Authenticity",
    description: "Sharing real stories and experiences to inspire and connect.",
  },
]

const testimonials = [
  {
    name: "Jessica L.",
    major: "Biology Student",
    image: "https://storage.googleapis.com/stabl-media/team-images/jessica.png",
    fallback: "JL",
    testimonial: "I used to run on sugary energy drinks. The SHIFT recipe book showed me how to make amazing iced teas that give me a clean energy boost. It's been a game-changer for my study sessions!",
    swap: "Energy Drinks → Green Tea",
  },
  {
    name: "Mike P.",
    major: "Engineering Student",
    image: "https://storage.googleapis.com/stabl-media/team-images/mike.png",
    fallback: "MP",
    testimonial: "The AI tool is so cool! I told it I liked sour, fruity drinks, and it suggested a sparkling water with lime and mint. I feel so much more hydrated and focused in class.",
    swap: "Soda → Sparkling Water",
  },
  {
    name: "Chloe T.",
    major: "Art History Student",
    image: "https://storage.googleapis.com/stabl-media/team-images/chloe.png",
    fallback: "CT",
    testimonial: "I love the community events. I met other students who are also into health and wellness, and even discovered a local kombucha vendor I'd never heard of. It's so much more than just not drinking soda.",
    swap: "Sugary Lattes → Kombucha",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[190vh] w-full">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/shift-qj44z.firebasestorage.app/o/banner.jpg?alt=media&token=f08481d8-9571-4677-9a4a-2c565e7d37a3"
          data-ai-hint="students healthy drinks"
          alt="Students creating impact with the SHIFT initiative by choosing healthy drinks over sugary beverages."
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="relative z-10 flex h-full items-center justify-center bg-black/50">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Make the SHIFT.
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Join the student wellness movement. Discover healthier, delicious drink alternatives that fuel your body and mind.
            </p>
            <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#swap-tool">Find Your Healthy Swap <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              SHIFT is built on a foundation of support, knowledge, and positive change.
            </p>
          </div>
          <div className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {value.icon}
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="swap-tool" className="bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
             <AIDrinkSuggester />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Real Stories, Real Impact</h2>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              See how students like you have made the switch to a healthier lifestyle.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto mt-12 w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-start gap-4 p-6">
                        <Badge variant="outline" className="border-accent text-accent-foreground">{testimonial.swap}</Badge>
                        <p className="flex-1 text-foreground/80">"{testimonial.testimonial}"</p>
                        <div className="flex w-full items-center gap-4 pt-4">
                          <Avatar>
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-foreground/70">{testimonial.major}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
