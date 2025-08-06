"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const recipeFormSchema = z.object({
  recipeName: z.string().min(2, "Recipe name must be at least 2 characters."),
  ingredients: z.string().min(10, "Ingredients must be at least 10 characters."),
  instructions: z.string().min(20, "Instructions must be at least 20 characters."),
  submittedBy: z.string().optional(),
})

const recipes = [
  {
    title: "Minty Cucumber Cooler",
    description: "A refreshing and hydrating drink, perfect for a hot day or after a workout.",
    image: "https://www.stackandsprout.com/cdn/shop/articles/IMG_9088.jpg?v=1695720115",
    aiHint: "cucumber mint drink",
    tags: ["Low Sugar", "Hydrating", "Vegan"],
  },
  {
    title: "Golden Turmeric Latte",
    description: "A warm and spicy anti-inflammatory latte to soothe and comfort.",
    image: "https://firebasestorage.googleapis.com/v0/b/stabl-media/o/team-images%2Fgolden-turmeric-latte.png?alt=media&token=e0e7a2b2-5b3a-4a5e-8b1e-6e8a1a3e5e2b",
    aiHint: "turmeric latte",
    tags: ["Caffeine-Free", "Comforting"],
  },
  {
    title: "Sparkling Berry Splash",
    description: "A bubbly and antioxidant-rich alternative to soda.",
    image: "https://firebasestorage.googleapis.com/v0/b/stabl-media/o/team-images%2Fsparkling-berry-splash.png?alt=media&token=a8e5b3a2-5b3a-4a5e-8b1e-6e8a1a3e5e2b",
    aiHint: "berry soda water",
    tags: ["Bubbly", "Low Sugar", "Fruity"],
  },
  {
    title: "Spicy Ginger Elixir",
    description: "A zesty and invigorating shot to boost your digestion and immunity.",
    image: "https://firebasestorage.googleapis.com/v0/b/stabl-media/o/team-images%2Fspicy-ginger-elixir.png?alt=media&token=e8a1a3e5-5b3a-4a5e-8b1e-6e8a1a3e5e2b",
    aiHint: "ginger lemon shot",
    tags: ["Immunity", "Spicy"],
  },
  {
    title: "Creamy Matcha Power-Up",
    description: "A focused energy boost without the jitters of coffee.",
    image: "https://storage.googleapis.com/stabl-media/SHIFT/SHIFT-matcha-and-blue-pea-latte-1.png",
    aiHint: "matcha blue latte",
    tags: ["Energy", "Focus"],
  },
  {
    title: "Hibiscus Iced Tea",
    description: "A tangy and vitamin C-packed iced tea that's naturally sweet.",
    image: "https://firebasestorage.googleapis.com/v0/b/stabl-media/o/team-images%2Fhibiscus-iced-tea.png?alt=media&token=a1a3e5b3-5b3a-4a5e-8b1e-6e8a1a3e5e2b",
    aiHint: "hibiscus tea",
    tags: ["Fruity", "Caffeine-Free", "Refreshing"],
  },
]

export default function RecipesPage() {
  const form = useForm<z.infer<typeof recipeFormSchema>>({
    resolver: zodResolver(recipeFormSchema),
    defaultValues: {
      recipeName: "",
      ingredients: "",
      instructions: "",
      submittedBy: "",
    },
  })

  function onSubmit(data: z.infer<typeof recipeFormSchema>) {
    toast({
      title: "Submission Received!",
      description: "Thanks for sharing your recipe. It will be reviewed by our team.",
    })
    form.reset()
  }

  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">The Recipe Book</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Explore delicious and healthy drink recipes shared by the SHIFT community.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <Card key={recipe.title} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={recipe.image}
                    data-ai-hint={recipe.aiHint}
                    alt={recipe.title}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {recipe.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                  <h3 className="font-headline text-2xl font-semibold">{recipe.title}</h3>
                  <p className="mt-2 text-foreground/70">{recipe.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="submit-recipe" className="bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Share Your Creation</CardTitle>
                <CardDescription>Have a healthy drink recipe? Submit it for a chance to be featured!</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="recipeName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Recipe Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Sunshine Smoothie" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ingredients"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ingredients</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="List all ingredients, one per line..."
                              className="resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Be specific with measurements if you can.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="instructions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Instructions</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Explain how to make the drink step by step..."
                              className="resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="submittedBy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Let us know who to credit!" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit Recipe</Button>
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
