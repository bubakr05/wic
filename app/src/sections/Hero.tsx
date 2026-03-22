import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Play, Globe, Smartphone, Cpu } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `perspective(500px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-[10%] w-32 h-32 rounded-full border border-neon-cyan/20 animate-float"
          style={{ 
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-[15%] w-24 h-24 rounded-full border border-neon-blue/20 animate-float-slow"
          style={{ 
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.5s ease-out',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-[30%] right-[30%] text-neon-purple/40 animate-float"
          style={{ animationDelay: '2s' }}
        >
          <Globe size={24} />
        </div>
        <div 
          className="absolute bottom-[25%] left-[15%] text-neon-blue/40 animate-float-slow"
          style={{ animationDelay: '1.5s' }}
        >
          <Smartphone size={28} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                <Globe className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm text-white/80 font-medium">Burkina Faso</span>
              </div>

              {/* Main Title */}
              <h1 
                className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight mb-6 animate-fade-up"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="text-white">Développez votre</span>
                <br />
                <span className="text-white">activité avec des</span>
                <br />
                <span className="gradient-text">solutions web & mobiles</span>
              </h1>

              {/* Description */}
              <p 
                className="text-white/70 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up"
                style={{ animationDelay: '0.6s' }}
              >
                Nous accompagnons les entreprises, écoles et entrepreneurs au Burkina Faso dans la création de sites web, applications web et applications mobiles.
              </p>

              {/* Features */}
              <div className="flex flex-col gap-3 mb-8 animate-fade-up" style={{ animationDelay: '0.7s' }}>
                {[
                  'Sites web professionnels',
                  'Applications web & mobiles',
                  'Solutions de gestion personnalisées'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/70">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
                style={{ animationDelay: '0.8s' }}
              >
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary group flex items-center justify-center gap-2"
                >
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Découvrir nos services
                </button>
              </div>

              {/* Stats */}
              <div 
                className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 animate-fade-up"
                style={{ animationDelay: '1s' }}
              >
                {[
                  { value: '50+', label: 'Projets réalisés' },
                  { value: '30+', label: 'Clients satisfaits' },
                  { value: 'BF', label: ' Burkina Faso' },
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold gradient-text font-display">
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div 
                className="relative"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${mousePosition.y * -10}deg)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 blur-3xl animate-pulse" />
                </div>

                <div className="relative w-80 h-80">
                  <div 
                    className="absolute top-0 left-0 w-48 glass rounded-2xl p-4 animate-float"
                    style={{ transform: `translateZ(50px) rotateY(-10deg)` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mb-3">
                      <Globe className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">Sites Web</h3>
                    <p className="text-white/50 text-xs">Professionnels & Responsive</p>
                  </div>

                  <div 
                    className="absolute top-20 right-0 w-48 glass rounded-2xl p-4 animate-float-slow"
                    style={{ transform: `translateZ(80px) rotateY(10deg)`, animationDelay: '1s' }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mb-3">
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">Apps Mobiles</h3>
                    <p className="text-white/50 text-xs">Android & Solutions locales</p>
                  </div>

                  <div 
                    className="absolute bottom-0 left-10 w-48 glass rounded-2xl p-4 animate-float"
                    style={{ transform: `translateZ(30px)`, animationDelay: '2s' }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-blue to-neon-cyan flex items-center justify-center mb-3">
                      <Cpu className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">Gestion</h3>
                    <p className="text-white/50 text-xs">Automatisation & Suivi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero
