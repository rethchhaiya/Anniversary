import { Heart } from 'lucide-react'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-rose/15 bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center sm:px-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-rose/25 bg-ivory">
          <Heart
            className="h-3.5 w-3.5 text-rose-deep"
            fill="currentColor"
            strokeWidth={1}
            aria-hidden="true"
          />
        </span>
        <p className="font-script text-2xl text-rose-deep sm:text-3xl">
          For Mama one and only
        </p>
        <p className="text-[9.5px] uppercase tracking-[0.28em] text-ink-soft/55">
          Every word here is yours &middot; {YEAR}
        </p>
      </div>
    </footer>
  )
}
