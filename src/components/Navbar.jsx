import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Heart, Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#memories', label: 'Memories' },
  { href: '#story', label: 'Our Story' },
  { href: '#letter', label: 'The Letter' },
  { href: '#surprises', label: 'Surprises' },
  { href: '#anniversary', label: 'Anniversary' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? 'border-b border-rose/10 bg-ivory/85 shadow-[0_12px_32px_-28px_rgba(61,45,40,0.5)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2 font-script text-[1.6rem] leading-none text-rose-deep"
          onClick={() => setOpen(false)}
        >
          <Heart
            className="h-4 w-4 text-rose transition-transform duration-500 group-hover:scale-110"
            fill="currentColor"
            strokeWidth={1.2}
            aria-hidden="true"
          />
          Mama
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.22em] text-ink-soft transition-colors duration-300 hover:text-rose-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-blush/60 hover:text-rose-deep md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden border-t border-rose/10 bg-ivory/95 backdrop-blur-md md:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={reduceMotion ? undefined : { height: 'auto', opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile" className="px-5 py-4 sm:px-8">
              <ul className="divide-y divide-rose/10">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between py-3.5 text-[12px] uppercase tracking-[0.22em] text-ink-soft transition-colors hover:text-rose-deep"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                      <Heart
                        className="h-3 w-3 text-dusty"
                        fill="currentColor"
                        strokeWidth={1}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
