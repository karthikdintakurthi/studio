import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, User, Clock } from "lucide-react"

const events = [
  {
    date: new Date(new Date().setDate(new Date().getDate() + 5)),
    title: "Kombucha Brewing Workshop",
    description: "Learn to brew your own kombucha at home! All materials provided.",
    location: "Student Union, Room 201",
    time: "4:00 PM - 6:00 PM",
    type: "Workshop",
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() + 12)),
    title: "Juice Vendor Fair",
    description: "Meet local cold-pressed juice vendors and sample their delicious, healthy products.",
    location: "Library Quad",
    time: "11:00 AM - 3:00 PM",
    type: "Fair",
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() + 21)),
    title: "Q&A with a Nutritionist",
    description: "Ask a registered nutritionist your questions about healthy eating and hydration.",
    location: "Online via Zoom",
    time: "7:00 PM - 8:00 PM",
    type: "Talk",
  },
]

export default function EventsPage() {
  return (
     <>
      <section className="bg-primary/5">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Community Events</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Join us for workshops, fairs, and talks. Connect with the SHIFT community and learn more about wellness.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-3 md:px-6">
          <div className="md:col-span-2">
            <h2 className="font-headline text-3xl font-bold mb-6">Upcoming Events</h2>
            <div className="space-y-8">
              {events.map((event) => (
                <Card key={event.title} className="flex flex-col sm:flex-row">
                  <div className="flex w-full flex-col justify-center bg-primary/10 p-4 text-center sm:w-1/4">
                    <p className="text-4xl font-bold text-primary">{event.date.toLocaleDateString('en-US', { day: '2-digit' })}</p>
                    <p className="font-semibold text-primary/80">{event.date.toLocaleDateString('en-US', { month: 'short' })}</p>
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <Badge variant="outline" className="w-fit border-accent text-accent-foreground">{event.type}</Badge>
                      <CardTitle className="pt-2 font-headline text-2xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-foreground/70">
                      <p>{event.description}</p>
                      <div className="flex items-center gap-2 pt-2">
                        <MapPin className="h-4 w-4" /> <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" /> <span>{event.time}</span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
             <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Event Calendar</CardTitle>
                  <CardDescription>See all our events for the month.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={new Date()}
                    className="rounded-md"
                    modifiers={{
                      events: events.map(e => e.date)
                    }}
                    modifiersStyles={{
                      events: {
                        color: 'hsl(var(--primary-foreground))',
                        backgroundColor: 'hsl(var(--primary))'
                      }
                    }}
                  />
                </CardContent>
             </Card>
          </div>
        </div>
      </section>
    </>
  )
}
