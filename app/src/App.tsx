import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import Partners from './sections/Partners'
import Services from './sections/Services'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { MessageCircle } from 'lucide-react'

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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/videos/Beyond_the_Flat_Screen_version_1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
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
          <Partners />
          <Services />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/22671460802"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 group"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline font-medium">WhatsApp</span>
      </a>
    </div>
  )
}

export default App
