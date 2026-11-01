import { Heart } from 'lucide-react'
import { anniversary } from '../data/messages'
import FloatingPetals from './FloatingPetals'
import Reveal from './Reveal'
import { BotanicalSpray, FloralDivider } from './Ornaments'

export default function AnniversaryMessage() {
  return (
    <section
      id="anniversary"
      aria-labelledby="anniversary-title"
      className="relative isolate overflow-hidden bg-[#33221f] py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_50%_-10%,#5d3f3c_0%,#3d2a27_45%,#2b1d1b_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-20 h-96 w-96 -translate-x-1/2 rounded-full bg-rose-deep/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="paper-texture absolute inset-0 -z-20 opacity-30"
      />
      <FloatingPetals className="-z-10" />
      <BotanicalSpray
        className="absolute -left-16 top-16 -z-10 h-64 w-44 opacity-30 sm:left-0 sm:h-80 sm:w-56"
        stroke="#c5a06a"
      />
      <BotanicalSpray
        className="absolute -right-16 bottom-10 -z-10 h-64 w-44 opacity-30 sm:right-0 sm:h-80 sm:w-56"
        mirrored
        stroke="#c5a06a"
      />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center font-script text-2xl text-dusty sm:text-3xl">
            {anniversary.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto mt-7 rounded-t-[7.5rem] border border-gold/35 px-5 pb-12 pt-16 sm:rounded-t-[11rem] sm:px-14 sm:pb-16 sm:pt-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-2 rounded-t-[6.5rem] border border-gold/15 sm:inset-3 sm:rounded-t-[10rem]"
            />

            <span
              aria-hidden="true"
              className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-gold/40 bg-[#3d2a27] shadow-[0_0_30px_rgba(197,160,106,0.25)]"
            >
              <Heart
                className="h-4 w-4 text-gold"
                fill="currentColor"
                strokeWidth={1}
              />
            </span>

            <h2
              id="anniversary-title"
              className="text-balance text-center font-serif text-[2.15rem] leading-[1.12] tracking-tight text-ivory sm:text-5xl md:text-[3.4rem]"
            >
              {anniversary.heading}
              <span className="mt-3 flex items-center justify-center gap-3 font-script text-5xl text-dusty sm:text-6xl md:text-7xl">
                {anniversary.script}
                <Heart
                  className="h-6 w-6 text-rose sm:h-7 sm:w-7"
                  fill="currentColor"
                  strokeWidth={1}
                  aria-hidden="true"
                />
              </span>
            </h2>

            <FloralDivider light className="mt-7" />

            <div className="mx-auto mt-8 max-w-xl space-y-4 text-center">
              {anniversary.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-pretty text-[14.5px] leading-[1.9] text-ivory/70 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-lg text-balance text-center font-serif text-lg italic leading-relaxed text-ivory/85 sm:text-xl">
              {anniversary.closing}
            </p>

            <div className="mt-9 flex flex-col items-center gap-2">
              <span
                aria-hidden="true"
                className="soft-glow h-px w-16 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
              />
              <p className="font-script text-2xl text-dusty sm:text-3xl">
                {anniversary.signature}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
