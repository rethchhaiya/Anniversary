import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Heart, Sparkles } from 'lucide-react'
import {
  hiddenMessages,
  oneMoreThing,
} from '../data/messages'
import HeartBurst from './HeartBurst'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { Sprig } from './Ornaments'

export default function SurpriseMessages() {
  const [found, setFound] = useState(() => new Set())
  const [activeId, setActiveId] = useState(null)
  const [burstKey, setBurstKey] = useState(0)
  const [oneMoreBurst, setOneMoreBurst] = useState(0)
  const [oneMoreOpen, setOneMoreOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  const activeMessage = hiddenMessages.find((message) => message.id === activeId)
  const allFound = found.size === hiddenMessages.length

  const reveal = (id) => {
    setActiveId(id)
    setBurstKey((key) => key + 1)
    setFound((current) => {
      if (current.has(id)) return current
      const next = new Set(current)
      next.add(id)
      return next
    })
  }

  const openOneMore = () => {
    setOneMoreOpen(true)
    setOneMoreBurst((key) => key + 1)
  }

  return (
    <section
      id="surprises"
      aria-labelledby="surprises-title"
      className="relative overflow-hidden bg-cream py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_50%_0%,#f8e9e4_0%,transparent_72%)]"
      />
      <Sprig
        className="absolute -right-3 top-20 h-28 w-28 rotate-[200deg] opacity-25 sm:h-36 sm:w-36"
        stroke="#c5a06a"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          id="surprises-title"
          eyebrow="Little surprises"
          title="A Few Little Secrets"
          description="Small things I tucked away for you to find. Tap a heart to open it."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-11 grid max-w-lg grid-cols-3 gap-3 sm:gap-5">
            {hiddenMessages.map((message, index) => {
              const isFound = found.has(message.id)

              return (
                <button
                  key={message.id}
                  type="button"
                  onClick={() => reveal(message.id)}
                  className="group relative flex flex-col items-center gap-2 rounded-2xl border border-rose/15 bg-ivory/60 px-2 py-6 transition-all duration-500 hover:-translate-y-1 hover:border-rose/35 hover:bg-ivory sm:py-7"
                  aria-label={`Reveal secret ${message.label}`}
                >
                  <span className="relative flex items-center justify-center">
                    <Heart
                      className={`transition-all duration-500 ${
                        isFound
                          ? 'scale-105 text-rose-deep'
                          : 'text-dusty group-hover:scale-105 group-hover:text-rose'
                      } ${index === 1 ? 'h-10 w-10 sm:h-12 sm:w-12' : 'h-9 w-9 sm:h-11 sm:w-11'}`}
                      fill={isFound ? 'currentColor' : 'none'}
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                    <HeartBurst burstKey={activeId === message.id ? burstKey : 0} />
                  </span>
                  <span className="font-script text-lg leading-none text-ink-soft sm:text-xl">
                    {message.label}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <p className="mt-5 text-center text-[10px] uppercase tracking-[0.24em] text-ink-soft/55">
          {found.size} of {hiddenMessages.length} little secrets found
        </p>

        <div className="mx-auto mt-7 max-w-2xl" aria-live="polite">
          <AnimatePresence mode="wait">
            {activeMessage ? (
              <motion.div
                key={activeMessage.id}
                className="paper-texture relative overflow-hidden rounded-2xl border border-rose/20 bg-ivory px-6 py-9 text-center shadow-[0_30px_60px_-45px_rgba(61,45,40,0.6)] sm:px-10"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Heart
                  className="mx-auto h-4 w-4 text-rose/70"
                  fill="currentColor"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <p className="mx-auto mt-4 max-w-lg text-balance font-serif text-xl italic leading-relaxed text-ink/85 sm:text-2xl">
                  {activeMessage.message}
                </p>
              </motion.div>
            ) : (
              <motion.p
                key="empty"
                className="text-center font-script text-xl text-ink-soft/60 sm:text-2xl"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
              >
                Pick a heart, Mama.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {allFound && (
            <motion.div
              className="mt-12 flex flex-col items-center"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-script text-2xl text-rose-deep">
                You found them all.
              </span>

              <button
                type="button"
                onClick={openOneMore}
                aria-expanded={oneMoreOpen}
                aria-controls="one-more-message"
                className="group relative mt-4 inline-flex items-center gap-2.5 rounded-full border border-rose/35 bg-ivory px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-rose-deep transition-all duration-500 hover:-translate-y-0.5 hover:border-rose hover:bg-blush/40"
              >
                <Sparkles
                  className="h-4 w-4"
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
                {oneMoreThing.buttonLabel}
                <HeartBurst burstKey={oneMoreBurst} />
              </button>

              <AnimatePresence>
                {oneMoreOpen && (
                  <motion.div
                    id="one-more-message"
                    className="paper-texture relative mt-8 w-full max-w-2xl overflow-hidden rounded-[1.5rem] border border-rose/25 bg-[linear-gradient(160deg,#fdf3ef_0%,#f7e2dd_100%)] px-6 py-10 text-center shadow-[0_35px_70px_-45px_rgba(61,45,40,0.65)] sm:px-12 sm:py-12"
                    initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span
                      aria-hidden="true"
                      className="soft-glow absolute -right-16 -top-16 h-40 w-40 rounded-full bg-rose/20 blur-2xl"
                    />
                    <p className="relative text-[10px] uppercase tracking-[0.28em] text-rose-deep/70">
                      {oneMoreThing.eyebrow}
                    </p>
                    <p className="relative mx-auto mt-5 max-w-xl text-balance font-serif text-xl italic leading-relaxed text-ink/85 sm:text-2xl">
                      {oneMoreThing.message}
                    </p>
                    <p className="relative mt-6 font-script text-2xl text-rose-deep sm:text-3xl">
                      {oneMoreThing.signature}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
