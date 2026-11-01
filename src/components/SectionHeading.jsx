import Reveal from './Reveal'
import { FloralDivider } from './Ornaments'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  className = '',
  id,
}) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <Reveal>
        <p
          className={`font-script text-2xl sm:text-3xl ${
            light ? 'text-dusty' : 'text-rose-deep'
          }`}
        >
          {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <h2
          id={id}
          className={`mt-1 text-balance font-serif text-[2.15rem] leading-[1.08] tracking-tight sm:text-5xl md:text-[3.4rem] ${
            light ? 'text-ivory' : 'text-ink'
          }`}
        >
          {title}
        </h2>
      </Reveal>

      <Reveal delay={0.14}>
        <FloralDivider light={light} className="mt-5" />
      </Reveal>

      {description && (
        <Reveal delay={0.2}>
          <p
            className={`mt-4 text-pretty text-[15px] leading-relaxed sm:text-base ${
              light ? 'text-ivory/70' : 'text-ink-soft'
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
