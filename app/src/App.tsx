import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={mainRef} className="relative min-h-screen overflow-x-hidden">
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-bg" />
        <div 
          className="orb orb-1"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="orb orb-2"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        <div 
          className="orb orb-3"
          style={{ transform: `translateY(${scrollY * 0.05}px) translateX(${scrollY * 0.02}px)` }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <Services />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
