import { Sprig } from './Ornaments'

export default function PhotoPlaceholder({
  index = 0,
  compact = false,
  className = '',
}) {
  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,#fffdf9_0%,#fbece8_55%,#f3d9d4_100%)] text-center ${className}`}
      role="img"
      aria-label={`Placeholder for photo ${index + 1} — add your own image`}
    >
      <Sprig
        className={`absolute -left-2 -top-2 rotate-12 ${compact ? 'h-10 w-10' : 'h-16 w-16'}`}
        stroke="#c0817f"
      />
      <Sprig
        className={`absolute -bottom-3 -right-2 -rotate-[160deg] ${compact ? 'h-10 w-10' : 'h-16 w-16'}`}
        stroke="#d8a7a2"
      />

      <svg
        viewBox="0 0 120 120"
        className={`relative text-rose/60 ${compact ? 'h-9 w-9' : 'h-14 w-14 sm:h-16 sm:w-16'}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="20" y="26" width="80" height="70" rx="5" />
        <path d="M20 76l20-20 14 14 10-10 36 34" />
        <circle cx="78" cy="46" r="7" />
      </svg>

      <p
        className={`relative font-script text-rose-deep ${compact ? 'text-base' : 'mt-1 text-xl sm:text-2xl'}`}
      >
        Your photo here
      </p>
      {!compact && (
        <p className="relative mt-1 text-[9px] uppercase tracking-[0.28em] text-ink-soft/60">
          Placeholder {String(index + 1).padStart(2, '0')}
        </p>
      )}
    </div>
  )
}
