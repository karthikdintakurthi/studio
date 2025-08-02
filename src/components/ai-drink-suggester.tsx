"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";

import {
  SuggestHealthierDrinkInput,
  SuggestHealthierDrinkOutput,
  suggestHealthierDrink,
} from "@/ai/flows/suggest-healthier-drink";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Sparkles, GlassWater, BookOpen } from "lucide-react";

const formSchema = z.object({
  favoriteDrink: z.string().min(2, { message: "Please enter your favorite drink." }),
  flavors: z.string().min(3, { message: "Please describe your preferred flavors." }),
  sugarContent: z.enum(["low", "medium", "high"], { required_error: "Please select a sugar preference." }),
});

export default function AIDrinkSuggester() {
  const [suggestion, setSuggestion] = useState<SuggestHealthierDrinkOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      favoriteDrink: "",
      flavors: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestion(null);
    try {
      const result = await suggestHealthierDrink(values as SuggestHealthierDrinkInput);
      setSuggestion(result);
    } catch (error) {
      console.error("Error fetching suggestion:", error);
      toast({
        title: "Error",
        description: "Failed to get a suggestion. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary/10">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="font-headline text-3xl">AI Healthier Swap Tool</CardTitle>
            <CardDescription className="text-foreground/80">
              Let our AI find your next favorite healthy drink.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="favoriteDrink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What's your usual go-to drink?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Caramel macchiato, cola, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="flavors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What flavors do you enjoy?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Sweet, fruity, bubbly" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <FormField
                control={form.control}
                name="sugarContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred sugar level?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your sugar preference" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="low">Low Sugar</SelectItem>
                        <SelectItem value="medium">Medium Sugar</SelectItem>
                        <SelectItem value="high">I like it sweet!</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Finding a delicious swap...
                </>
              ) : (
                "Suggest a Healthier Drink"
              )}
            </Button>
          </form>
        </Form>
        <AnimatePresence>
        {suggestion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GlassWater className="h-6 w-6 text-primary" />
                  <span>Your Healthier Swap!</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg font-semibold">{suggestion.suggestedDrink}</p>
                {suggestion.recipeSuggestion && (
                  <div className="rounded-md border border-accent/50 bg-accent/10 p-4">
                    <h4 className="mb-2 flex items-center gap-2 font-bold text-primary">
                      <BookOpen className="h-5 w-5" />
                      Recipe Suggestion
                    </h4>
                    <p className="whitespace-pre-wrap font-mono text-sm text-foreground/80">{suggestion.recipeSuggestion}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
