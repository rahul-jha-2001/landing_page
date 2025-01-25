"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const stats = [
  { label: "Restaurants", value: 2000, suffix: "+" },
  { label: "Orders Processed", value: 1000000, suffix: "+" },
  { label: "Average Revenue Increase", value: 30, suffix: "%" },
]

export function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12">
      {stats.map((stat, index) => (
        <AnimatedStat key={index} {...stat} animate={inView} />
      ))}
    </div>
  )
}

function AnimatedStat({
  label,
  value,
  suffix,
  animate,
}: { label: string; value: number; suffix: string; animate: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (animate) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        setCount(Math.floor(start))
        if (start >= end) {
          clearInterval(timer)
          setCount(end)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [animate, value])

  return (
    <div>
      <h4 className="text-3xl font-bold">
        {count}
        {suffix}
      </h4>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}

