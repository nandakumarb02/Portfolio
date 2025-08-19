import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Don't initialize Lenis for users who prefer reduced motion
} else {
  const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true
  })

  function raf(time) {
    lenis.raf(time)
    ScrollTrigger.update()
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  lenis.on('scroll', ScrollTrigger.update)

  // Expose Lenis instance for other modules
  window.lenis = lenis
}

export {}
