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
import { UserPlus } from "lucide-react"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  schoolEmail: z.string().email("Please enter a valid school email address."),
  personalEmail: z.string().email("Please enter a valid personal email address.").optional().or(z.literal("")),
  schoolId: z.string().optional(),
  reasonToJoin: z.string().optional(),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      schoolEmail: "",
      personalEmail: "",
      schoolId: "",
      reasonToJoin: "",
    },
  })

  function onSubmit(data: z.infer<typeof contactFormSchema>) {
    console.log(data);
    toast({
      title: "Application Received!",
      description: "Thank you for your interest in SHIFT. We'll be in touch soon!",
    })
    form.reset()
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Become a Member</CardTitle>
          <CardDescription>
            Fill out your details below to apply to join the SHIFT chapter at Clarksburg High School.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Jane Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="schoolEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>School Email</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 123456@mcpsmd.net" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="personalEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Personal Email (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., jane.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
               <FormField
                  control={form.control}
                  name="schoolId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>School ID (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your student ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <FormField
                control={form.control}
                name="reasonToJoin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Why do you want to join SHIFT? (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us what inspired you to join the wellness movement..."
                        className="resize-y"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">
                <UserPlus className="mr-2 h-4 w-4" />
                Submit Application
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
