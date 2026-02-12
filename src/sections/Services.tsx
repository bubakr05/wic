import { useRef, useEffect, useState } from 'react'
import { 
  Globe, 
  Brain, 
  Smartphone, 
  TrendingUp, 
  GraduationCap, 
  Lightbulb,
  ArrowUpRight
} from 'lucide-react'

interface Service {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  color: string
  gradient: string
}

const services: Service[] = [
  {
    icon: Globe,
    title: 'Développement Web 3D',
    description: 'Sites vitrines immersifs, expériences e-commerce interactives et applications web avec animations 3D fluides.',
    features: ['Three.js / WebGL', 'React Three Fiber', 'Animations immersives', 'Performance optimisée'],
    color: 'neon-cyan',
    gradient: 'from-neon-cyan to-neon-blue'
  },
  {
    icon: Brain,
    title: 'Solutions IA',
    description: 'Intégration d\'intelligence artificielle, chatbots intelligents, automatisation et analyse prédictive.',
    features: ['Chatbots IA', 'Machine Learning', 'Automatisation', 'Analyse de données'],
    color: 'neon-purple',
    gradient: 'from-neon-purple to-neon-pink'
  },
  {
    icon: Smartphone,
    title: 'Apps Mobiles',
    description: 'Applications natives et cross-platform iOS/Android avec expériences utilisateur fluides et modernes.',
    features: ['React Native', 'Flutter', 'iOS & Android', 'UI/UX moderne'],
    color: 'neon-blue',
    gradient: 'from-neon-blue to-neon-cyan'
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Stratégies SEO/SEA, réseaux sociaux et campagnes publicitaires data-driven pour maximiser votre ROI.',
    features: ['SEO/SEA', 'Réseaux sociaux', 'Analytics', 'Growth hacking'],
    color: 'neon-pink',
    gradient: 'from-neon-pink to-neon-purple'
  },
  {
    icon: GraduationCap,
    title: 'Formation',
    description: 'Programmes de formation certifiants aux technologies web, design UX/UI et outils digitaux modernes.',
    features: ['Workshops', 'Certifications', 'Coaching', 'E-learning'],
    color: 'neon-cyan',
    gradient: 'from-neon-cyan to-neon-purple'
  },
  {
    icon: Lightbulb,
    title: 'Conseil Stratégique',
    description: 'Audit digital complet, stratégie de transformation et accompagnement personnalisé vers l\'excellence.',
    features: ['Audit digital', 'Stratégie', 'Accompagnement', 'Transformation'],
    color: 'neon-blue',
    gradient: 'from-neon-blue to-neon-pink'
  }
]

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setMousePosition({ x, y })
    }
  }

  const Icon = service.icon

  return (
    <div
      ref={cardRef}
      className="reveal group relative"
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative h-full glass rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 cursor-pointer"
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * -10}deg) rotateY(${(mousePosition.x - 0.5) * 10}deg) translateZ(20px)` 
            : 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)',
          transition: 'transform 0.3s ease-out'
        }}
      >
        {/* Glow Effect */}
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0, 245, 255, 0.15) 0%, transparent 50%)`
          }}
        />

        {/* Border Glow */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 0 0 1px rgba(0, 245, 255, 0.3), 0 0 30px rgba(0, 245, 255, 0.1)`
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-neon-cyan transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-sm mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.features.map((feature, i) => (
              <span 
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/70 border border-white/10"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-neon-cyan text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span>En savoir plus</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null)

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
      id="services" 
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
              Nos Expertises
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              Solutions digitales <span className="gradient-text">sur mesure</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Combinaison de design innovant et technologie de pointe pour propulser votre entreprise.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
