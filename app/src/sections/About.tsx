import { useRef, useEffect, useState } from 'react'
import { Award, Users, Target, Rocket, CheckCircle2 } from 'lucide-react'

const stats = [
  { value: 150, suffix: '+', label: 'Projets réalisés', icon: Rocket },
  { value: 50, suffix: '+', label: 'Clients satisfaits', icon: Users },
  { value: 14, suffix: '', label: 'Années d\'expertise', icon: Award },
  { value: 100, suffix: '%', label: 'Engagement qualité', icon: Target },
]

const values = [
  'Innovation constante',
  'Excellence technique',
  'Approche collaborative',
  'Solutions sur mesure',
  'Support dédié',
  'Résultats mesurables',
]

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  )
}

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0, 245, 255, 0.05) 0%, transparent 40%)`
        }}
      />

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="reveal">
                <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
                  À propos de nous
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
                  Une agence <span className="gradient-text">innovante</span> depuis 2010
                </h2>
              </div>

              <div className="reveal space-y-4 mb-8" style={{ transitionDelay: '100ms' }}>
                <p className="text-white/70 text-lg leading-relaxed">
                  Fondée avec la vision de démocratiser l'excellence digitale, Web Info Com combine 
                  expertise technique de pointe et créativité sans limite.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  Notre équipe d'experts passionnés transforme vos défis en opportunités digitales. 
                  Nous croyons en une approche collaborative et sur mesure, où chaque projet est une 
                  opportunité de repousser les limites de l'innovation web.
                </p>
              </div>

              {/* Values List */}
              <div className="reveal grid sm:grid-cols-2 gap-3 mb-8" style={{ transitionDelay: '200ms' }}>
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                    <span className="text-sm">{value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="reveal" style={{ transitionDelay: '300ms' }}>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-primary"
                >
                  Démarrer un projet
                </button>
              </div>
            </div>

            {/* Right Column - Stats & Visual */}
            <div className="relative">
              {/* 3D Card Stack */}
              <div className="relative h-80 mb-8 reveal" style={{ transitionDelay: '200ms' }}>
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    perspective: '1000px',
                    transform: `rotateY(${mousePosition.x * 10}deg) rotateX(${mousePosition.y * -10}deg)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  {/* Background Cards */}
                  <div 
                    className="absolute w-64 h-80 glass rounded-2xl"
                    style={{ 
                      transform: 'translateZ(-60px) rotateY(-15deg) translateX(-30px)',
                      background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 245, 255, 0.05))'
                    }}
                  />
                  <div 
                    className="absolute w-64 h-80 glass rounded-2xl"
                    style={{ 
                      transform: 'translateZ(-30px) rotateY(15deg) translateX(30px)',
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))'
                    }}
                  />
                  
                  {/* Main Card */}
                  <div 
                    className="relative w-72 h-80 glass-strong rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                    style={{ 
                      transform: 'translateZ(0)',
                      boxShadow: '0 0 40px rgba(0, 245, 255, 0.2)'
                    }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-black font-display">W</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">Web Info Com</h3>
                    <p className="text-white/60 text-sm mb-4">Excellence Digitale</p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs">Innovation</span>
                      <span className="px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue text-xs">Créativité</span>
                      <span className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs">Performance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div 
                      key={index}
                      className="reveal glass rounded-xl p-4 text-center group hover:shadow-glow transition-all duration-300"
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
                      <Icon className="w-6 h-6 text-neon-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl md:text-3xl font-bold gradient-text font-display mb-1">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-white/50 text-xs">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
