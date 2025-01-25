"use client"

import { useEffect, useRef } from "react"

export function WeeklyChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Data points
    const data1 = [20, 35, 25, 45, 30, 55, 40]
    const data2 = [30, 45, 35, 50, 40, 60, 45]
    const width = canvas.width
    const height = canvas.height
    const padding = 20

    // Create gradient
    const gradient = ctx.createLinearGradient(0, height, 0, 0)
    gradient.addColorStop(0, "rgba(255, 223, 144, 0)")
    gradient.addColorStop(1, "rgba(255, 223, 144, 0.2)")

    // Draw area
    ctx.beginPath()
    ctx.moveTo(padding, height - (data1[0] / 60) * (height - padding * 2))

    data1.forEach((point, i) => {
      const x = padding + (i * (width - padding * 2)) / (data1.length - 1)
      const y = height - (point / 60) * (height - padding * 2)
      ctx.lineTo(x, y)
    })

    // Complete the area by drawing to the bottom
    ctx.lineTo(width - padding, height)
    ctx.lineTo(padding, height)
    ctx.closePath()

    ctx.fillStyle = gradient
    ctx.fill()

    // Draw second area
    const gradient2 = ctx.createLinearGradient(0, height, 0, 0)
    gradient2.addColorStop(0, "rgba(162, 89, 255, 0)")
    gradient2.addColorStop(1, "rgba(162, 89, 255, 0.2)")

    ctx.beginPath()
    ctx.moveTo(padding, height - (data2[0] / 60) * (height - padding * 2))

    data2.forEach((point, i) => {
      const x = padding + (i * (width - padding * 2)) / (data2.length - 1)
      const y = height - (point / 60) * (height - padding * 2)
      ctx.lineTo(x, y)
    })

    ctx.lineTo(width - padding, height)
    ctx.lineTo(padding, height)
    ctx.closePath()

    ctx.fillStyle = gradient2
    ctx.fill()
  }, [])

  return <canvas ref={canvasRef} width={600} height={300} className="w-full" />
}

