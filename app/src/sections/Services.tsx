import { useRef, useEffect, useState } from 'react'
import { 
  Globe, 
  Smartphone,
  Monitor,
  Settings,
  GraduationCap,
  CheckCircle2
} from 'lucide-react'

interface Service {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  objective: string
  color: string
  gradient: string
}

const services: Service[] = [
  {
    icon: Globe,
    title: 'Création de sites web professionnels',
    description: 'Sites vitrines pour entreprises, hôtels, écoles et agences immobilières avec design moderne et responsive.',
    features: [
      'Sites vitrines pour entreprises',
      'Sites pour hôtels, écoles, agences',
      'Design moderne et responsive',
      'Optimisation pour Google'
    ],
    objective: 'Améliorer votre visibilité et attirer plus de clients',
    color: 'neon-cyan',
    gradient: 'from-neon-cyan to-neon-blue'
  },
  {
    icon: Monitor,
    title: 'Développement d\'applications web',
    description: 'Applications de gestion pour écoles, entreprises et PME avec automatisation des tâches.',
    features: [
      'Applications de gestion (écoles, PME)',
      'Automatisation (facturation, suivi)',
      'Accès sécurisé avec comptes utilisateurs',
      'Tableaux de bord personnalisés'
    ],
    objective: 'Simplifier votre gestion quotidienne',
    color: 'neon-blue',
    gradient: 'from-neon-blue to-neon-purple'
  },
  {
    icon: Smartphone,
    title: 'Développement d\'applications mobiles',
    description: 'Applications Android adaptées au contexte local avec interface simple pour vos équipes.',
    features: [
      'Applications Android adaptées au local',
      'Solutions utilisables avec connexion limitée',
      'Interface simple pour vos équipes',
      'Déploiement rapide'
    ],
    objective: 'Rendre vos services accessibles partout',
    color: 'neon-purple',
    gradient: 'from-neon-purple to-neon-pink'
  },
  {
    icon: Settings,
    title: 'Solutions digitales sur mesure',
    description: 'Analyse de vos besoins et conception de solutions personnalisées adaptées à votre activité.',
    features: [
      'Analyse de vos besoins',
      'Conception de solutions personnalisées',
      'Intégration de systèmes existants',
      'Support et maintenance'
    ],
    objective: 'Créer un outil parfaitement adapté à votre activité',
    color: 'neon-pink',
    gradient: 'from-neon-pink to-neon-cyan'
  },
  {
    icon: GraduationCap,
    title: 'Formation & accompagnement',
    description: 'Formation à l\'utilisation des outils et assistance après livraison pour votre autonomie.',
    features: [
      'Formation à l\'utilisation des outils',
      'Assistance après livraison',
      'Support technique réactif',
      'Documentation complète'
    ],
    objective: 'Vous rendre autonome',
    color: 'neon-cyan',
    gradient: 'from-neon-cyan to-neon-blue'
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
        <div 
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0, 245, 255, 0.15) 0%, transparent 50%)`
          }}
        />

        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 0 0 1px rgba(0, 245, 255, 0.3), 0 0 30px rgba(0, 245, 255, 0.1)`
          }}
        />

        <div className="relative z-10">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-neon-cyan transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-white/60 text-sm mb-6 leading-relaxed">
            {service.description}
          </p>

          <div className="space-y-2 mb-6">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2 text-white/70 text-sm">
                <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="p-3 glass rounded-lg bg-neon-cyan/5 border border-neon-cyan/20">
            <p className="text-neon-cyan text-sm font-medium flex items-center gap-2">
              <span className="text-lg">🎯</span>
              {service.objective}
            </p>
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
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
              Nos Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              Des solutions pour <span className="gradient-text">tous vos besoins</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Du site web à l'application mobile en passant par les solutions de gestion, nous accompagnons votre transformation digitale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          {/* GESCO Mention */}
          <div className="reveal mt-12 glass-strong rounded-2xl p-8 text-center" style={{ transitionDelay: '600ms' }}>
            <h3 className="text-xl font-bold text-white mb-4 font-display">
              Nos solutions déjà développées
            </h3>
            <p className="text-white/70 mb-4">
              Nous développons également des solutions prêtes à l'emploi, comme :
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
                Logiciels de gestion scolaire
              </span>
              <span className="px-4 py-2 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/30">
                Outils de gestion d'entreprise
              </span>
            </div>
            <p className="text-white/60 text-sm mt-4">
              Ces solutions peuvent être adaptées selon vos besoins
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
