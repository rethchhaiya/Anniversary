import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { Sprig } from './Ornaments'
import {
  RELATIONSHIP_START,
  RELATIONSHIP_START_IS_PLACEHOLDER,
} from '../config/relationship'

const UNITS = [
  { key: 'years', label: 'Years' },
  { key: 'months', label: 'Months' },
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

const EMPTY = {
  years: 0,
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

function getDuration(start, end) {
  if (end <= start) return EMPTY

  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()
  let days = end.getDate() - start.getDate()
  let hours = end.getHours() - start.getHours()
  let minutes = end.getMinutes() - start.getMinutes()
  let seconds = end.getSeconds() - start.getSeconds()

  if (seconds < 0) {
    seconds += 60
    minutes -= 1
  }
  if (minutes < 0) {
    minutes += 60
    hours -= 1
  }
  if (hours < 0) {
    hours += 24
    days -= 1
  }
  if (days < 0) {
    const daysInPreviousMonth = new Date(
      end.getFullYear(),
      end.getMonth(),
      0,
    ).getDate()
    days += daysInPreviousMonth
    months -= 1
  }
  if (months < 0) {
    months += 12
    years -= 1
  }

  return { years, months, days, hours, minutes, seconds }
}

const startDate = new Date(RELATIONSHIP_START)
const hasValidStart = !Number.isNaN(startDate.getTime())
const startLabel = hasValidStart
  ? new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(startDate)
  : null

export default function TogetherCounter() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const duration = hasValidStart ? getDuration(startDate, now) : EMPTY
  const isFuture = hasValidStart && now < startDate

  return (
    <section
      id="together"
      aria-labelledby="together-title"
      className="relative overflow-hidden bg-ivory py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_50%_0%,#f9ece7_0%,transparent_70%)]"
      />
      <Sprig className="absolute -left-2 top-12 h-24 w-24 opacity-30 sm:h-32 sm:w-32" />
      <Sprig
        className="absolute -right-2 bottom-10 h-24 w-24 -rotate-[160deg] opacity-30 sm:h-32 sm:w-32"
        stroke="#d8a7a2"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="together-title"
          eyebrow="Time we've been together"
          title="Every Second Counts"
          description="Not a countdown. Just a quiet reminder of how long you have been part of my days."
        />

        <Reveal delay={0.1}>
          <div className="mt-11 grid grid-cols-3 gap-2.5 sm:mt-14 sm:grid-cols-6 sm:gap-4">
            {UNITS.map((unit) => {
              const value = duration[unit.key]
              const display =
                unit.key === 'years'
                  ? String(value)
                  : String(value).padStart(2, '0')

              return (
                <div
                  key={unit.key}
                  className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-rose/12 bg-cream/60 px-1 py-5 sm:py-7"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-rose/35 to-transparent"
                  />
                  <span className="font-serif text-[2rem] leading-none tabular-nums text-ink sm:text-[2.7rem]">
                    {display}
                  </span>
                  <span className="mt-2.5 text-[8.5px] uppercase tracking-[0.22em] text-ink-soft/70 sm:text-[10px]">
                    {unit.label}
                  </span>
                </div>
              )
            })}
          </div>
        </Reveal>

        {hasValidStart && !isFuture ? (
          <Reveal delay={0.18}>
            <p className="mt-9 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center font-script text-xl text-rose-deep sm:text-2xl">
              <Heart
                className="h-3.5 w-3.5 text-rose"
                fill="currentColor"
                strokeWidth={1}
                aria-hidden="true"
              />
              since {startLabel}
            </p>
          </Reveal>
        ) : (
          <Reveal delay={0.18}>
            <p className="mt-9 text-center font-script text-xl text-rose-deep sm:text-2xl">
              Our story is just beginning.
            </p>
          </Reveal>
        )}

        {import.meta.env.DEV && RELATIONSHIP_START_IS_PLACEHOLDER && (
          <p className="mt-3 text-center text-[11px] tracking-wide text-ink-soft/50">
            Development note: set the real start date in{' '}
            <code className="rounded bg-blush/50 px-1.5 py-0.5">
              src/config/relationship.js
            </code>
            .
          </p>
        )}
      </div>
    </section>
  )
}
