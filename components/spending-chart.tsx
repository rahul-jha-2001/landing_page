"use client"

import { useEffect, useRef } from "react"

export function SpendingChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Data points
    const data = [30, 45, 25, 60, 35, 25, 40]
    const width = canvas.width
    const height = canvas.height
    const padding = 20

    // Draw line
    ctx.beginPath()
    ctx.moveTo(padding, height - (data[0] / 60) * (height - padding * 2))

    data.forEach((point, i) => {
      const x = padding + (i * (width - padding * 2)) / (data.length - 1)
      const y = height - (point / 60) * (height - padding * 2)
      ctx.lineTo(x, y)
    })

    ctx.strokeStyle = "#ffdf90"
    ctx.lineWidth = 2
    ctx.stroke()
  }, [])

  return <canvas ref={canvasRef} width={300} height={150} className="w-full" />
}

