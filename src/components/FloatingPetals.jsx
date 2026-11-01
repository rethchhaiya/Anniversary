const PETALS = Array.from({ length: 12 }, (_, index) => ({
  left: (index * 29 + 9) % 94,
  size: 8 + ((index * 7) % 10),
  duration: 24 + ((index * 9) % 18),
  delay: -((index * 6) % 30),
  drift: (index % 2 === 0 ? 1 : -1) * (30 + ((index * 13) % 70)),
  opacity: 0.25 + ((index * 5) % 10) / 40,
  tone: index % 3,
}))

const TONES = ['#e9c8c3', '#d8a7a2', '#c5a06a']

export default function FloatingPetals({ className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {PETALS.map((petal, index) => (
        <span
          key={index}
          className="petal absolute block"
          style={{
            left: `${petal.left}%`,
            top: '-6%',
            width: petal.size,
            height: petal.size,
            color: TONES[petal.tone],
            '--duration': `${petal.duration}s`,
            '--delay': `${petal.delay}s`,
            '--drift': `${petal.drift}px`,
            '--petal-opacity': petal.opacity,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
            <path d="M12 2c4.5 5 7 8.5 7 12a7 7 0 1 1-14 0c0-3.5 2.5-7 7-12Z" />
          </svg>
        </span>
      ))}
    </div>
  )
}
