import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Play, Sparkles, Zap, Code2, Cpu } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const cubeRef = useRef<HTMLDivElement>(null)

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
        {/* Floating Circles */}
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
          className="absolute top-1/3 right-[25%] w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan/10 to-neon-blue/10 animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />

        {/* 3D Cube */}
        <div 
          ref={cubeRef}
          className="absolute top-1/2 right-[10%] -translate-y-1/2 hidden lg:block"
          style={{ 
            perspective: '1000px',
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        >
          <div 
            className="relative w-40 h-40"
            style={{
              transformStyle: 'preserve-3d',
              animation: 'cube-rotate 20s linear infinite',
              transform: `rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)`
            }}
          >
            {/* Cube Faces */}
            {[...Array(6)].map((_, i) => {
              const rotations = [
                'rotateY(0deg) translateZ(80px)',
                'rotateY(90deg) translateZ(80px)',
                'rotateY(180deg) translateZ(80px)',
                'rotateY(-90deg) translateZ(80px)',
                'rotateX(90deg) translateZ(80px)',
                'rotateX(-90deg) translateZ(80px)',
              ]
              return (
                <div
                  key={i}
                  className="absolute inset-0 border-2 border-neon-cyan/30 rounded-lg"
                  style={{
                    transform: rotations[i],
                    background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(0, 102, 255, 0.1))',
                    backdropFilter: 'blur(5px)',
                    boxShadow: '0 0 20px rgba(0, 245, 255, 0.2), inset 0 0 20px rgba(0, 245, 255, 0.1)'
                  }}
                />
              )
            })}
            
            {/* Inner Glow */}
            <div 
              className="absolute inset-0 rounded-lg"
              style={{
                background: 'radial-gradient(circle, rgba(0, 245, 255, 0.2) 0%, transparent 70%)',
                transform: 'translateZ(40px)'
              }}
            />
          </div>
        </div>

        {/* Floating Icons */}
        <div 
          className="absolute top-[20%] left-[20%] text-neon-cyan/40 animate-float"
          style={{ animationDelay: '0.5s' }}
        >
          <Code2 size={32} />
        </div>
        <div 
          className="absolute bottom-[25%] left-[15%] text-neon-blue/40 animate-float-slow"
          style={{ animationDelay: '1.5s' }}
        >
          <Cpu size={28} />
        </div>
        <div 
          className="absolute top-[30%] right-[30%] text-neon-purple/40 animate-float"
          style={{ animationDelay: '2s' }}
        >
          <Zap size={24} />
        </div>

        {/* Glowing Rings */}
        <div 
          className="absolute bottom-[15%] right-[20%] w-48 h-48 rounded-full border border-neon-cyan/10 animate-spin-slow"
          style={{
            background: 'radial-gradient(circle, transparent 60%, rgba(0, 245, 255, 0.05) 100%)'
          }}
        />
        <div 
          className="absolute bottom-[10%] right-[15%] w-64 h-64 rounded-full border border-neon-blue/10 animate-spin-reverse"
          style={{
            background: 'radial-gradient(circle, transparent 60%, rgba(0, 102, 255, 0.03) 100%)'
          }}
        />
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
                <Sparkles className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm text-white/80 font-medium">Agence Digitale Innovante</span>
              </div>

              {/* Main Title */}
              <h1 
                className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="text-white">Transformez</span>
                <br />
                <span className="gradient-text">votre présence</span>
                <br />
                <span className="text-white">digitale</span>
              </h1>

              {/* Description */}
              <p 
                className="text-white/60 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up"
                style={{ animationDelay: '0.6s' }}
              >
                Agence digitale spécialisée dans le développement web 3D, les solutions IA 
                et la transformation digitale. Propulsez votre entreprise dans l'ère de l'innovation.
              </p>

              {/* CTA Buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
                style={{ animationDelay: '0.8s' }}
              >
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="btn-primary group flex items-center justify-center gap-2"
                >
                  Découvrir nos services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Parlons de votre projet
                </button>
              </div>

              {/* Stats */}
              <div 
                className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 animate-fade-up"
                style={{ animationDelay: '1s' }}
              >
                {[
                  { value: '150+', label: 'Projets réalisés' },
                  { value: '50+', label: 'Clients satisfaits' },
                  { value: '14', label: 'Années d\'expertise' },
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

            {/* Right Column - 3D Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div 
                className="relative"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${mousePosition.y * -10}deg)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {/* Central Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 blur-3xl animate-pulse" />
                </div>

                {/* Floating Cards */}
                <div className="relative w-80 h-80">
                  {/* Card 1 - Web 3D */}
                  <div 
                    className="absolute top-0 left-0 w-48 glass rounded-2xl p-4 animate-float"
                    style={{
                      transform: `translateZ(50px) rotateY(-10deg)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mb-3">
                      <Code2 className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">Web 3D</h3>
                    <p className="text-white/50 text-xs">Expériences immersives</p>
                  </div>

                  {/* Card 2 - IA */}
                  <div 
                    className="absolute top-20 right-0 w-48 glass rounded-2xl p-4 animate-float-slow"
                    style={{
                      transform: `translateZ(80px) rotateY(10deg)`,
                      animationDelay: '1s',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mb-3">
                      <Cpu className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">Solutions IA</h3>
                    <p className="text-white/50 text-xs">Intelligence artificielle</p>
                  </div>

                  {/* Card 3 - Innovation */}
                  <div 
                    className="absolute bottom-0 left-10 w-48 glass rounded-2xl p-4 animate-float"
                    style={{
                      transform: `translateZ(30px)`,
                      animationDelay: '2s',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-blue to-neon-cyan flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">Innovation</h3>
                    <p className="text-white/50 text-xs">Technologies de pointe</p>
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
