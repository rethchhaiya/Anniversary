import { useCallback, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Heart } from 'lucide-react'
import { memories } from '../data/memories'
import { gallerySecret } from '../data/messages'
import PhotoPlaceholder from './PhotoPlaceholder'
import Lightbox from './Lightbox'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { Sprig } from './Ornaments'

const TILTS = [-2.4, 1.8, -1.2, 2.2, -1.8, 1.2, 2.6, -2]

export default function MemoryGallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [seen, setSeen] = useState(() => new Set())
  const reduceMotion = useReducedMotion()

  const markSeen = useCallback((index) => {
    const id = memories[index].id
    setSeen((current) => {
      if (current.has(id)) return current
      const next = new Set(current)
      next.add(id)
      return next
    })
  }, [])

  const openMemory = (index) => {
    setActiveIndex(index)
    markSeen(index)
  }

  const close = useCallback(() => setActiveIndex(null), [])

  const goPrev = useCallback(() => {
    if (activeIndex === null) return
    const next = (activeIndex - 1 + memories.length) % memories.length
    setActiveIndex(next)
    markSeen(next)
  }, [activeIndex, markSeen])

  const goNext = useCallback(() => {
    if (activeIndex === null) return
    const next = (activeIndex + 1) % memories.length
    setActiveIndex(next)
    markSeen(next)
  }, [activeIndex, markSeen])

  const allSeen = memories.length > 0 && seen.size >= memories.length

  return (
    <section
      id="memories"
      aria-labelledby="memories-title"
      className="relative overflow-hidden bg-cream py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-52 bg-[radial-gradient(ellipse_at_50%_0%,#f8e9e4_0%,transparent_72%)]"
      />
      <Sprig className="absolute -right-4 top-24 h-28 w-28 rotate-[200deg] opacity-25 sm:h-36 sm:w-36" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="memories-title"
          eyebrow="Our memories"
          title="A Little Scrapbook of Us"
          description="A few of our moments, kept somewhere softer than a camera roll."
        />

        <ul className="mt-12 grid gap-x-5 gap-y-10 pb-2 pt-5 sm:mt-16 sm:grid-cols-2 sm:gap-x-7 lg:grid-cols-3 lg:gap-x-8">
          {memories.map((memory, index) => {
            const tilt = TILTS[index % TILTS.length]

            return (
              <li key={memory.id}>
                <Reveal delay={(index % 3) * 0.08}>
                  <button
                    type="button"
                    className="polaroid group relative block w-full text-left"
                    style={{ '--tilt': `${tilt}deg` }}
                    onClick={() => openMemory(index)}
                    aria-label={`Open memory ${index + 1}${
                      memory.caption ? `: ${memory.caption}` : ''
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -top-3.5 left-1/2 z-10 h-6 w-20 -translate-x-1/2 -rotate-2 rounded-[2px] border border-white/40 bg-blush-deep/45 shadow-[0_2px_6px_-2px_rgba(61,45,40,0.25)] backdrop-blur-[1px] transition-transform duration-500 group-hover:rotate-0"
                    />

                    <span className="frame-shadow relative block rounded-[4px] border border-[#ece0d6] bg-ivory p-2.5 pb-3.5 sm:p-3 sm:pb-4">
                      <span className="relative block aspect-square overflow-hidden bg-blush/30 lg:aspect-[4/5]">
                        {memory.src ? (
                          <img
                            src={memory.src}
                            alt={memory.alt || 'A memory of ours'}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                        ) : (
                          <PhotoPlaceholder index={index} />
                        )}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3d2d28]/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                      </span>

                      <span className="flex min-h-[2.9rem] items-center justify-between gap-2 px-1.5 pt-3">
                        <span className="font-script text-lg leading-snug text-ink-soft sm:text-xl">
                          {memory.caption}
                        </span>
                        <Heart
                          className="h-3.5 w-3.5 shrink-0 text-rose opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          fill="currentColor"
                          strokeWidth={1}
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </button>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <AnimatePresence>
          {allSeen && (
            <motion.div
              className="mt-12 flex flex-col items-center gap-3 text-center"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="max-w-xl font-script text-2xl leading-snug text-rose-deep sm:text-3xl">
                {gallerySecret.message}
              </p>
              <a
                href="#surprises"
                className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-ink-soft transition-colors hover:text-rose-deep"
              >
                {gallerySecret.linkLabel}
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            memories={memories}
            index={activeIndex}
            onClose={close}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
