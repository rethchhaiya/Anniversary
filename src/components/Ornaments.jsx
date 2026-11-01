export function FloralDivider({ light = false, className = '' }) {
  const stroke = light ? '#e2c4ad' : '#b9797f'

  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span
        className="h-px w-10 sm:w-16"
        style={{
          background: `linear-gradient(to right, transparent, ${stroke})`,
        }}
      />
      <svg
        width="74"
        height="22"
        viewBox="0 0 74 22"
        fill="none"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 11c-4-1-7-3.5-7-7 3.5.4 6.4 3.2 7 7Z" />
        <path d="M50 11c4-1 7-3.5 7-7-3.5.4-6.4 3.2-7 7Z" />
        <path
          d="M37 15.6c-.3 0-.6-.2-.9-.4-2.6-2.3-4.6-4.1-4.6-6.6 0-1.7 1.3-3 3-3 1 0 1.9.5 2.5 1.3.6-.8 1.5-1.3 2.5-1.3 1.7 0 3 1.3 3 3 0 2.5-2 4.3-4.6 6.6-.3.2-.6.4-.9.4Z"
          fill={stroke}
          stroke="none"
        />
        <circle cx="17" cy="11" r="0.9" fill={stroke} stroke="none" />
        <circle cx="57" cy="11" r="0.9" fill={stroke} stroke="none" />
      </svg>
      <span
        className="h-px w-10 sm:w-16"
        style={{
          background: `linear-gradient(to left, transparent, ${stroke})`,
        }}
      />
    </div>
  )
}

export function BotanicalSpray({
  className = '',
  mirrored = false,
  stroke = '#c0817f',
  opacity = 0.4,
}) {
  return (
    <svg
      viewBox="0 0 200 300"
      className={className}
      fill="none"
      stroke={stroke}
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{
        opacity,
        transform: mirrored ? 'scaleX(-1)' : undefined,
      }}
    >
      <path d="M34 296c14-56 22-108 21-160-1-46 11-84 38-122" />
      <path d="M55 136c-20-8-34-28-34-52 22 4 38 22 40 48" />
      <path d="M57 178c19-8 31-24 33-43-19 3-33 19-35 39" />
      <path d="M56 216c-18-6-30-22-31-41 18 4 30 19 33 37" />
      <path d="M68 84c15-8 24-22 24-38-15 4-25 17-27 34" />
      <path d="M79 56c-10-10-13-24-9-37 11 7 17 20 15 34" />
      <path d="M61 250c16-6 27-19 30-35-16 2-28 15-31 31" />
      <circle cx="91" cy="16" r="3.2" />
      <path d="M91 16c-6-5-13-7-20-6M91 16c6-5 13-7 20-6" opacity=".7" />
    </svg>
  )
}

export function Sprig({ className = '', stroke = '#c0817f' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 88C36 68 54 46 64 16" />
      <path d="M40 62C24 60 14 48 14 34c16 2 27 12 30 26" />
      <path d="M48 48C64 46 76 36 78 22 62 24 50 34 48 48Z" />
      <path d="M34 70C50 74 66 68 74 56 58 52 42 58 34 70Z" />
      <circle cx="64" cy="16" r="2.4" />
    </svg>
  )
}

export function HeartGlyph({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  )
}
