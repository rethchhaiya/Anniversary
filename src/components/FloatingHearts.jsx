const HEART_PATH =
  'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z'

const HEARTS = Array.from({ length: 14 }, (_, index) => ({
  left: (index * 37 + 6) % 96,
  size: 9 + ((index * 13) % 15),
  duration: 20 + ((index * 7) % 16),
  delay: -((index * 5) % 26),
  drift: (index % 2 === 0 ? 1 : -1) * (10 + ((index * 11) % 46)),
  spin: (index % 2 === 0 ? 1 : -1) * (12 + ((index * 3) % 18)),
  opacity: 0.16 + ((index * 3) % 12) / 80,
  tone: index % 3,
}))

const TONES = ['#c0817f', '#d8a7a2', '#c5a06a']

export default function FloatingHearts({ className = '', count = 14 }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {HEARTS.slice(0, count).map((heart, index) => (
        <span
          key={index}
          className="float-heart absolute bottom-[-8%] block"
          style={{
            left: `${heart.left}%`,
            width: heart.size,
            height: heart.size,
            color: TONES[heart.tone],
            '--duration': `${heart.duration}s`,
            '--delay': `${heart.delay}s`,
            '--drift': `${heart.drift}px`,
            '--spin': `${heart.spin}deg`,
            '--heart-opacity': heart.opacity,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
            <path d={HEART_PATH} />
          </svg>
        </span>
      ))}
    </div>
  )
}
