import { Heart } from 'lucide-react'
import { loveLetter } from '../data/loveLetter'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { Sprig } from './Ornaments'

export default function LoveLetter() {
  return (
    <section
      id="letter"
      aria-labelledby="letter-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf5ee_0%,#f8e9e4_28%,#f5ded9_68%,#fbf5ee_100%)] py-20 sm:py-28"
    >
      <Sprig className="absolute left-2 top-16 h-24 w-24 rotate-[35deg] opacity-30 sm:left-10 sm:h-36 sm:w-36" />
      <Sprig
        className="absolute -right-2 bottom-16 h-24 w-24 rotate-[215deg] opacity-30 sm:right-8 sm:h-36 sm:w-36"
        stroke="#d8a7a2"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="letter-title"
          eyebrow="A letter for Mama"
          title="Words I Want You to Keep"
          description="Some things are easier to write than to say. So I wrote them down."
        />

        <Reveal className="relative mx-auto mt-14 max-w-3xl sm:mt-16" y={34}>
          <div
            aria-hidden="true"
            className="absolute inset-x-3 top-4 h-full rotate-[-1.4deg] rounded-[1.9rem] border border-rose/15 bg-blush-deep/30"
          />

          <article className="paper-texture relative rounded-[1.75rem] border border-rose/20 bg-ivory px-6 pb-12 pt-16 shadow-[0_45px_80px_-45px_rgba(89,57,51,0.55)] sm:px-12 sm:pb-16 sm:pt-20 md:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-2.5 rounded-[1.4rem] border border-rose/10 sm:inset-3.5"
            />

            <span
              aria-hidden="true"
              className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#c6848b,#8e515c_72%)] shadow-[0_14px_26px_-14px_rgba(61,45,40,0.8)] ring-1 ring-white/30"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25">
                <Heart
                  className="h-[18px] w-[18px] text-ivory/90"
                  fill="currentColor"
                  strokeWidth={1}
                />
              </span>
            </span>

            <p className="font-script text-3xl leading-none text-rose-deep sm:text-4xl">
              {loveLetter.greeting}
            </p>

            <p className="mt-5 text-pretty text-[15px] leading-[1.85] text-ink/85 sm:text-base">
              {loveLetter.intro}
            </p>

            <div className="mt-9 space-y-9 sm:mt-10 sm:space-y-10">
              {loveLetter.sections.map((section) => (
                <div key={section.id}>
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-px w-7 bg-rose/45"
                    />
                    <h3 className="text-balance font-serif text-[1.55rem] italic leading-snug text-rose-deep sm:text-[1.75rem]">
                      {section.heading}
                    </h3>
                  </div>
                  <div className="mt-3.5 space-y-3.5">
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-pretty text-[14.5px] leading-[1.85] text-ink-soft sm:text-[15.5px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-pretty border-t border-rose/15 pt-7 font-serif text-lg italic leading-relaxed text-ink/85 sm:text-xl">
              {loveLetter.closing}
            </p>

            <div className="mt-8 flex items-end justify-between gap-4">
              <Heart
                className="h-4 w-4 shrink-0 text-rose/70"
                fill="currentColor"
                strokeWidth={1}
                aria-hidden="true"
              />
              <p className="text-right font-script text-3xl leading-tight text-rose-deep sm:text-4xl">
                {loveLetter.signature}
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
