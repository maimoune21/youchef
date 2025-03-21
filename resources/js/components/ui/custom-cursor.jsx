import { useState, useEffect } from "react"

export default function CustomCursor({ isVisible, position}) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let animationFrameId

    const smoothMove = () => {
      setCursorPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }))
      animationFrameId = requestAnimationFrame(smoothMove)
    }

    if (isVisible) {
      smoothMove()
    }

    return () => cancelAnimationFrame(animationFrameId)
  }, [position, isVisible])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-50 hidden md:block"
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >

        <div className="w-5 h-5 rounded-full bg-10 circle-cursor"></div>
    </div>
  )
}