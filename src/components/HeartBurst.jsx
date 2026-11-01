import { HeartGlyph } from './Ornaments'

const BURST = Array.from({ length: 8 }, (_, index) => {
  const angle = (index / 8) * Math.PI * 2
  return {
    tx: Math.cos(angle) * (34 + (index % 3) * 8),
    ty: Math.sin(angle) * (34 + (index % 2) * 10) - 10,
    size: 8 + (index % 3) * 3,
  }
})

export default function HeartBurst({ burstKey }) {
  if (!burstKey) return null

  return (
    <span
      key={burstKey}
      className="heart-burst pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      {BURST.map((heart, index) => (
        <span
          key={index}
          style={{
            '--tx': `${heart.tx}px`,
            '--ty': `${heart.ty}px`,
            width: heart.size,
            height: heart.size,
            color: index % 2 === 0 ? '#b9797f' : '#c5a06a',
          }}
        >
          <HeartGlyph className="h-full w-full" />
        </span>
      ))}
    </span>
  )
}
