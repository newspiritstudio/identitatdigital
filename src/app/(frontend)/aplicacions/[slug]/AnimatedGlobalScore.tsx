'use client'

import { useEffect, useState } from 'react'

type Props = {
  value?: number | null
}

export default function AnimatedGlobalScore({ value }: Props) {
  const target = Math.max(0, Math.min(100, Math.round(value ?? 0)))
  const [score, setScore] = useState(0)

  useEffect(() => {
    let start: number | null = null
    const duration = 1200

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp

      const progress = Math.min((timestamp - start) / duration, 1)

      // Animació suau: ràpida al principi i més lenta al final
      const eased = 1 - Math.pow(1 - progress, 3)

      setScore(Math.round(target * eased))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    const frame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frame)
  }, [target])

  const radius = 48
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  // 3 colors segons la puntuació
  const scoreColor =
    target >= 70
      ? 'var(--good)' // verd
      : target >= 40
        ? 'var(--mid)' // taronja
        : 'var(--bad)' // vermell

  return (
    <div
      className="animated-global-score"
      role="img"
      aria-label={`Puntuació global: ${target} sobre 100`}
    >
      <div className="animated-global-score-circle">
        <svg
          className="animated-global-score-ring"
          viewBox="0 0 120 120"
          aria-hidden="true"
        >
          {/* Cercle de fons */}
          <circle
            className="animated-global-score-track"
            cx="60"
            cy="60"
            r={radius}
          />

          {/* Cercle de progrés */}
          <circle
            className="animated-global-score-progress"
            cx="60"
            cy="60"
            r={radius}
            style={{
              stroke: scoreColor,
              strokeDasharray: circumference,
              strokeDashoffset: offset,
            }}
          />
        </svg>

        {/* Número dins del cercle */}
        <div
          className="animated-global-score-number"
          style={{ color: scoreColor }}
        >
          {score}
        </div>
      </div>

      {/* /100 fora del cercle */}
      <span className="animated-global-score-max">/100</span>
    </div>
  )
}
