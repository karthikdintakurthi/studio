"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { StoriesMap } from "@/components/stories-map"

const storyFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  location: z.string().min(2, "Please provide a location (e.g., your university, city)."),
  story: z.string().min(20, "Your story must be at least 20 characters long."),
  previousDrink: z.string().min(2, "Please tell us your old go-to drink."),
  newDrink: z.string().min(2, "Please tell us your new go-to drink."),
})

const stories = [
  {
    name: "Alex R.",
    location: "UCLA, Los Angeles",
    image: "https://firebasestorage.googleapis.com/v0/b/stabl-media/o/team-images%2Falex.png?alt=media&token=c15c8a32-8511-4402-a16a-35ed820356c4",
    fallback: "AR",
    story: "Switching from three sodas a day to flavored sparkling water was tough at first, but now I have so much more energy and no more afternoon crashes. It's amazing how much better I feel.",
    swap: "Soda → Sparkling Water",
    position: { lat: 34.0689, lng: -118.4452 },
  },
  {
    name: "Maria G.",
    location: "NYU, New York",
    image: "https://firebasestorage.googleapis.com/v0/b/stabl-media/o/team-images%2Fmaria.png?alt=media&token=e0e7a2b2-5b3a-4a5e-8b1e-6e8a1a3e5e2b",
    fallback: "MG",
    story: "I didn't realize how much sugar was in my daily 'fancy' coffee. I started making my own cold brew at home and just adding a splash of oat milk. I'm saving money and feel less jittery.",
    swap: "Sugary Coffee → Cold Brew",
    position: { lat: 40.7295, lng: -73.9965 },
  },
  {
    name: "Ben C.",
    location: "University of Texas, Austin",
    image: "https://firebasestorage.googleapis.com/v0/b/stabl-media/o/team-images%2Fben.png?alt=media&token=a8e5b3a2-5b3a-4a5e-8b1e-6e8a1a3e5e2b",
    fallback: "BC",
    story: "As an athlete, hydration is key. I used to think I needed a sports drinks, but they're loaded with sugar. Now I stick to water with a bit of lemon and salt. My performance has actually improved.",
    swap: "Sports Drinks → Lemon Water",
    position: { lat: 30.2849, lng: -97.7341 },
  },
]

export default function StoriesPage() {
  const form = useForm<z.infer<typeof storyFormSchema>>({
    resolver: zodResolver(storyFormSchema),
    defaultValues: { name: "", location: "", story: "", previousDrink: "", newDrink: "" },
  })

  function onSubmit(data: z.infer<typeof storyFormSchema>) {
    toast({
      title: "Thank You!",
      description: "Your story has been submitted for review. Keep up the great work!",
    })
    form.reset()
  }

  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Student Stories Map</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            See the impact of the SHIFT movement from students across the country.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-6">
          <Card>
            <CardContent className="p-4">
              <div className="aspect-video w-full rounded-lg bg-muted overflow-hidden">
                 <StoriesMap stories={stories} />
              </div>
            </CardContent>
            <CardHeader>
              <CardTitle>Inspiring Journeys</CardTitle>
              <CardDescription>Read stories from students who have made a positive change.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {stories.map((story) => (
                 <Card key={story.name} className="flex flex-col">
                  <CardContent className="flex flex-1 flex-col items-start gap-4 p-6">
                    <Badge variant="outline" className="border-accent text-accent-foreground">{story.swap}</Badge>
                    <p className="flex-1 text-sm text-foreground/80">"{story.story}"</p>
                    <div className="flex w-full items-center gap-4 border-t pt-4">
                      <Avatar>
                        <AvatarImage src={story.image} alt={story.name} />
                        <AvatarFallback>{story.fallback}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{story.name}</p>
                        <p className="text-sm text-foreground/70">{story.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

       <section id="submit-story" className="bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Share Your Story</CardTitle>
                <CardDescription>Inspire others by sharing your journey. Your story could be featured on our map!</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                     <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Jane D." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Location</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., UC Berkeley, CA" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                     </div>
                     <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="previousDrink"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Old Drink</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Energy Drink" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="newDrink"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your New Healthy Swap</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Iced Green Tea" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                     </div>
                    <FormField
                      control={form.control}
                      name="story"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Story</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your swap. How did it feel? What changes did you notice?"
                              className="resize-y"
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit My Story</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
