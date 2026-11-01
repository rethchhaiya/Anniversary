import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, Heart } from 'lucide-react'
import FloatingHearts from './FloatingHearts'
import { BotanicalSpray, FloralDivider } from './Ornaments'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-28 text-center sm:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#fffdf9_0%,#fbf5ee_42%,#f8e9e4_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 top-10 -z-20 h-80 w-80 rounded-full bg-dusty/25 blur-3xl sm:h-[26rem] sm:w-[26rem]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-0 -z-20 h-80 w-80 rounded-full bg-blush/60 blur-3xl sm:h-[24rem] sm:w-[24rem]"
      />
      <div
        aria-hidden="true"
        className="paper-texture absolute inset-0 -z-20 opacity-70"
      />

      <BotanicalSpray className="absolute -left-16 top-8 -z-10 h-64 w-44 sm:left-0 sm:h-80 sm:w-56" />
      <BotanicalSpray
        className="absolute -right-16 bottom-0 -z-10 h-64 w-44 sm:right-0 sm:h-80 sm:w-56"
        mirrored
        stroke="#d8a7a2"
      />

      <FloatingHearts className="-z-0" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-4xl"
        variants={container}
        initial={reduceMotion ? false : 'hidden'}
        animate="show"
      >
        <motion.div
          variants={reduceMotion ? undefined : item}
          className="relative mx-auto mb-8 flex h-14 w-14 items-center justify-center"
        >
          <span className="soft-glow absolute inset-0 rounded-full bg-rose/20 blur-xl" />
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-rose/30 bg-ivory/80 shadow-[0_10px_24px_-18px_rgba(61,45,40,0.6)]">
            <Heart
              className="h-5 w-5 text-rose-deep"
              fill="currentColor"
              strokeWidth={1.2}
              aria-hidden="true"
            />
          </span>
        </motion.div>

        <motion.p
          variants={reduceMotion ? undefined : item}
          className="font-script text-2xl text-rose-deep sm:text-3xl"
        >
          A little world, made just for you
        </motion.p>

        <motion.h1
          id="hero-title"
          variants={reduceMotion ? undefined : item}
          className="mt-3 text-balance font-serif text-[2.6rem] leading-[1.04] tracking-[-0.015em] text-ink sm:text-6xl md:text-7xl lg:text-[5.2rem]"
        >
          For Mama,
          <span className="mt-1 block italic text-rose-deep">
            With All My Love
          </span>
        </motion.h1>

        <motion.div variants={reduceMotion ? undefined : item}>
          <FloralDivider className="mt-6 sm:mt-7" />
        </motion.div>

        <motion.p
          variants={reduceMotion ? undefined : item}
          className="mx-auto mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-lg"
        >
          A little place filled with memories, love, and everything I want to
          tell you.
        </motion.p>

        <motion.div
          variants={reduceMotion ? undefined : item}
          className="mt-9 flex flex-col items-center gap-5"
        >
          <a
            href="#memories"
            className="group inline-flex items-center gap-3 rounded-full bg-rose-deep px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-ivory shadow-[0_18px_30px_-18px_rgba(162,96,106,0.9)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-ink sm:px-9"
          >
            Open Our Memories
            <ArrowDown
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-0.5"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </a>

          <span
            aria-hidden="true"
            className="h-12 w-px bg-gradient-to-b from-rose/40 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
