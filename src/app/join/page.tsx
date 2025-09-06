
import ContactForm from "@/components/contact-form";

export default function JoinPage() {
  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Join SHIFT at Clarksburg High School</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Ready to make a difference? Fill out the form below to become a member of your school's SHIFT chapter.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-6">
           <ContactForm />
        </div>
      </section>
    </>
  )
}
