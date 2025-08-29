import { useState, useEffect } from "react"

/**
 * TypingText
 * Muestra texto letra por letra, con opción de cursor parpadeante
 * @param {string} text - Texto a escribir
 * @param {number} speed - Velocidad de escritura (ms)
 * @param {boolean} showCursor - Mostrar cursor al final
 * @param {boolean} start - Inicia animación
 * @param {function} onComplete - Callback al terminar
 */
export default function TypingText({ text, speed = 100, showCursor = false, start = true, onComplete }) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    if (!start || !text) return

    setDisplayed("") // Resetear el texto mostrado
    let index = 0
    
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayed((prev) => prev + text[index])
        index++
      } else {
        clearInterval(interval)
        if (onComplete && typeof onComplete === "function") {
          onComplete()
        }
      }
    }, speed + Math.random() * 80)

    return () => clearInterval(interval)
  }, [text, speed, start, onComplete])

  return (
    <span>
      {displayed}
      {showCursor && <span className="blinking-cursor">_</span>}
    </span>
  )
}
