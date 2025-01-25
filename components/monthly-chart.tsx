"use client"

import { useEffect, useRef } from "react"

export function MonthlyChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set up the donut chart
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) * 0.8

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#61dafb") // React blue
    gradient.addColorStop(0.5, "#a259ff") // Purple
    gradient.addColorStop(1, "#ff7262") // Coral

    // Draw background circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.strokeStyle = "#2A2A2D"
    ctx.lineWidth = 20
    ctx.stroke()

    // Draw progress arc (75% complete)
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, Math.PI * 1)
    ctx.strokeStyle = gradient
    ctx.lineWidth = 20
    ctx.stroke()
  }, [])

  return <canvas ref={canvasRef} width={200} height={200} className="w-full max-w-[200px] mx-auto" />
}

