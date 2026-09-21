import { ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { people } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function PeopleGrid() {
  return (
    <section className="border-t border-border bg-secondary/60 py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Our people</p>
            <h2 className="display-lg mt-5 max-w-3xl text-balance">
              The engineers, managers and technical specialists behind the work.
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              UIP Africa combines senior engineering judgement, site delivery experience and technical
              office precision across every stage of the project lifecycle.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {people.map((person, index) => (
            <Reveal as="li" key={person.name} delay={(index % 4) * 60} className="bg-card">
              <Dialog>
                <article className="group flex h-full flex-col">
                  <div className="media-zoom bg-muted">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="aspect-4/5 w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="eyebrow">{person.experience}</p>
                    <h3 className="mt-4 text-2xl leading-tight">{person.name}</h3>
                    <p className="mt-2 min-h-10 text-sm leading-relaxed text-muted-foreground">
                      {person.role}
                    </p>
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        className="mt-7 h-auto justify-between rounded-none border-t border-border px-0 pt-4 text-xs font-semibold uppercase text-accent shadow-none hover:bg-transparent hover:text-primary"
                      >
                        View profile
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </Button>
                    </DialogTrigger>
                  </div>
                </article>

                <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-background p-0 sm:max-w-4xl">
                  <div className="grid gap-px bg-border md:grid-cols-5">
                    <div className="bg-card md:col-span-2">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="h-full max-h-[34rem] min-h-80 w-full object-cover object-top"
                      />
                    </div>
                    <div className="relative bg-card p-8 md:col-span-3 md:p-10">
                      <DialogClose asChild>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          aria-label="Close profile"
                          className="absolute right-4 top-4 h-10 w-10 rounded-full border border-border bg-background/90 shadow-none"
                        >
                          <X aria-hidden="true" className="h-4 w-4" />
                        </Button>
                      </DialogClose>
                      <DialogHeader className="pr-10 text-left">
                        <p className="eyebrow">{person.experience}</p>
                        <DialogTitle className="mt-4 font-display text-4xl font-normal leading-tight">
                          {person.name}
                        </DialogTitle>
                        <DialogDescription className="text-base text-accent">
                          {person.role}
                        </DialogDescription>
                      </DialogHeader>
                      <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                        {person.bio}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
