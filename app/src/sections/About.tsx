import { useRef, useEffect, useState } from 'react'
import { AlertTriangle, Target, Award, Users, Handshake, Wrench, Lightbulb } from 'lucide-react'

const problems = [
  'Votre activité n\'est pas digitalisée',
  'Vous perdez du temps avec une gestion manuelle',
  'Vos clients ne vous trouvent pas facilement en ligne',
  'Vous utilisez plusieurs outils non connectés'
]

const missions = [
  'Connexion internet instable',
  'Besoin de solutions simples et efficaces',
  'Budget maîtrisé'
]

const whyChooseUs = [
  { icon: Users, text: 'Compréhension du marché local (Burkina Faso)' },
  { icon: Wrench, text: 'Solutions adaptées aux réalités terrain' },
  { icon: Lightbulb, text: 'Approche simple et efficace' },
  { icon: Handshake, text: 'Accompagnement personnalisé' },
  { icon: Award, text: 'Excellent rapport qualité / prix' }
]

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
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0, 245, 255, 0.05) 0%, transparent 40%)`
        }}
      />

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Section: Vos Défis */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block px-4 py-2 rounded-full glass text-red-400 text-sm font-medium mb-4">
                <AlertTriangle className="w-4 h-4 inline mr-2" />
                Vos défis aujourd'hui
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
                Votre activité rencontre ces <span className="text-red-400">problèmes</span> ?
              </h2>
            </div>

            <div className="space-y-4 reveal" style={{ transitionDelay: '100ms' }}>
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 glass rounded-xl border-l-4 border-red-400/50 hover:border-red-400 transition-colors"
                >
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{problem}</span>
                </div>
              ))}
              <div className="p-4 glass rounded-xl bg-red-400/10 border border-red-400/30 mt-4">
                <p className="text-red-300 font-medium">
                  Résultat : perte de temps, d'argent et d'opportunités
                </p>
              </div>
            </div>
          </div>

          {/* Section: Notre Mission */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-4 reveal" style={{ transitionDelay: '100ms' }}>
              {missions.map((mission, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 glass rounded-xl border-l-4 border-neon-cyan/50 hover:border-neon-cyan transition-colors"
                >
                  <Target className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{mission}</span>
                </div>
              ))}
              <div className="p-4 glass rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 mt-4">
                <p className="text-neon-cyan font-medium">
                  Nous transformons vos idées en outils concrets qui travaillent pour vous
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 reveal">
              <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
                <Target className="w-4 h-4 inline mr-2" />
                Notre mission
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
                Des solutions adaptées aux <span className="gradient-text">réalités locales</span>
              </h2>
              <p className="text-white/70 text-lg">
                Chez Web Info Com, nous concevons des solutions digitales qui tiennent compte des spécificités du Burkina Faso.
              </p>
            </div>
          </div>

          {/* Section: Pourquoi Nous Choisir */}
          <div className="text-center">
            <div className="reveal mb-12">
              <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
                Notre valeur ajoutée
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
                Pourquoi choisir <span className="gradient-text">Web Info Com</span> ?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon
                return (
                  <div 
                    key={index}
                    className="reveal glass rounded-2xl p-6 text-left hover:shadow-glow transition-all duration-300 group"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 flex items-center justify-center mb-4 group-hover:from-neon-cyan group-hover:to-neon-blue transition-all duration-300">
                      <Icon className="w-6 h-6 text-neon-cyan group-hover:text-black transition-colors" />
                    </div>
                    <p className="text-white/80 font-medium">{item.text}</p>
                  </div>
                )
              })}
            </div>

            <div className="reveal glass-strong rounded-2xl p-6 max-w-2xl mx-auto" style={{ transitionDelay: '500ms' }}>
              <p className="text-white/90 text-lg">
                Nous ne livrons pas juste un outil. <span className="gradient-text font-semibold">Nous vous aidons à résoudre un problème concret.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
