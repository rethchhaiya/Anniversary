import { Heart } from 'lucide-react'
import { timeline } from '../data/timeline'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { BotanicalSpray } from './Ornaments'

export default function Timeline() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="relative overflow-hidden bg-ivory py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(ellipse_at_50%_100%,#f9ece7_0%,transparent_72%)]"
      />
      <BotanicalSpray
        className="absolute -left-20 bottom-10 h-72 w-48 opacity-20 sm:h-96 sm:w-64"
        stroke="#c5a06a"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="story-title"
          eyebrow="Our story"
          title="The Story We're Writing"
          description="The moments that brought us here — kept in order, so we never lose them."
        />

        <ol className="relative mx-auto mt-12 max-w-4xl sm:mt-16">
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-[1.15rem] top-3 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-rose/35 to-transparent md:left-1/2"
          />

          {timeline.map((event, index) => {
            const isRight = index % 2 === 1

            return (
              <li
                key={event.id}
                className="relative pb-9 pl-12 last:pb-0 md:grid md:grid-cols-2 md:gap-x-16 md:pb-14 md:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-[1.15rem] top-1.5 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-rose/35 bg-ivory shadow-[0_3px_8px_-4px_rgba(61,45,40,0.4)] md:left-1/2 md:top-7"
                >
                  <Heart
                    className="h-2.5 w-2.5 text-rose-deep"
                    fill="currentColor"
                    strokeWidth={1}
                  />
                </span>

                <div
                  className={
                    isRight
                      ? 'md:col-start-2 md:pl-1'
                      : 'md:col-start-1 md:pr-1'
                  }
                >
                  <Reveal delay={0.06}>
                    <article className="group rounded-2xl border border-rose/15 bg-cream/55 p-6 shadow-[0_18px_40px_-34px_rgba(61,45,40,0.5)] backdrop-blur-[1px] transition-colors duration-500 hover:border-rose/30 hover:bg-cream/80 sm:p-7">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-rose-deep/80">
                        {event.date}
                      </p>
                      <h3 className="mt-2 text-balance font-serif text-2xl leading-snug text-ink sm:text-[1.7rem]">
                        {event.title}
                      </h3>
                      <p className="mt-3 text-pretty text-[14.5px] leading-relaxed text-ink-soft">
                        {event.description}
                      </p>

                      {event.photo && (
                        <div className="mt-5 overflow-hidden rounded-xl border border-rose/10">
                          <img
                            src={event.photo}
                            alt={event.title}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover"
                          />
                        </div>
                      )}
                    </article>
                  </Reveal>
                </div>
              </li>
            )
          })}
        </ol>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-md text-center font-script text-2xl leading-snug text-rose-deep sm:text-3xl">
            And the best part is that this page is still being written.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
