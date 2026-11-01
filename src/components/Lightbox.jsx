import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import PhotoPlaceholder from './PhotoPlaceholder'

export default function Lightbox({ memories, index, onClose, onPrev, onNext }) {
  const closeRef = useRef(null)
  const touchStartX = useRef(null)
  const reduceMotion = useReducedMotion()
  const memory = memories[index]
  const total = memories.length

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement

    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrev()
      if (event.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, onPrev, onNext])

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return

    const distance = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(distance) < 55) return
    if (distance > 0) onPrev()
    else onNext()
  }

  if (!memory) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#211816]/94 p-4 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Memory viewer"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="relative flex w-full max-w-3xl flex-col items-center"
        initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 bg-ivory/10 text-ivory/90 transition-colors hover:bg-ivory/20 hover:text-ivory"
          aria-label="Close photo viewer"
        >
          <X className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
        </button>

        <div className="flex w-full flex-col items-center">
          <div className="rounded-[4px] bg-ivory p-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.65)] sm:p-3">
            {memory.src ? (
              <img
                src={memory.src}
                alt={memory.alt || 'A memory of ours'}
                className="max-h-[64svh] w-auto max-w-full rounded-[2px] object-contain"
              />
            ) : (
              <div className="h-[52svh] max-h-[30rem] w-[calc(100vw-5.5rem)] max-w-[22rem] sm:w-[24rem]">
                <PhotoPlaceholder index={index} />
              </div>
            )}
          </div>

          <div className="mt-4 flex w-full items-center justify-between gap-4">
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition-colors hover:bg-ivory/10 hover:text-ivory"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
            </button>

            <div className="min-w-0 text-center">
              {memory.caption && (
                <p className="truncate font-script text-xl text-ivory/95 sm:text-2xl">
                  {memory.caption}
                </p>
              )}
              <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-ivory/50">
                {index + 1} / {total}
              </p>
            </div>

            <button
              type="button"
              onClick={onNext}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition-colors hover:bg-ivory/10 hover:text-ivory"
              aria-label="Next photo"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
