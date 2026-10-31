import { useEffect, useRef, useState } from 'react'

// Fades children up when they scroll into view
export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setShow(true), { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`${className} transition duration-1000 ${show ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      {children}
    </div>
  )
}
