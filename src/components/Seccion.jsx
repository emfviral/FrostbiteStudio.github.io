import { useEffect, useRef, useState } from "react"

export default function Seccion({ id, children }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1, // cuando el 10% de la sección es visible
      }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <div
      id={id}
      ref={ref}
      className={`fade-section ${isVisible ? "visible" : ""}`}
      style={{ minHeight: "50vh" }} // se asegura espacio suficiente
    >
      {children}
    </div>
  )
}


