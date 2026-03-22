import { useRef, useEffect, useState } from 'react'
import { ExternalLink, ArrowUpRight, Building, GraduationCap, ShoppingBag } from 'lucide-react'

interface Project {
  title: string
  category: string
  description: string
  icon: React.ElementType
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'Plateforme de gestion scolaire',
    category: 'Éducation',
    description: 'Solution complète pour la gestion des notes, bulletins et suivi des élèves pour écoles et lycées.',
    icon: GraduationCap,
    tags: ['Gestion scolaire', 'Notes & Bulletins', 'Suivi élève'],
    link: '#'
  },
  {
    title: 'Site web vitrine',
    category: 'Web',
    description: 'Site professionnel pour hôtels, restaurants et commerces avec design moderne et responsive.',
    icon: Building,
    tags: ['Site vitrine', 'SEO', 'Mobile-first'],
    link: '#'
  },
  {
    title: 'Application de gestion PME',
    category: 'Business',
    description: 'Outil de gestion integrated pour PME avec facturation, stock et reporting en temps réel.',
    icon: ShoppingBag,
    tags: ['Facturation', 'Stock', 'Dashboard'],
    link: '#'
  },
  {
    title: 'Application mobile Android',
    category: 'Mobile',
    description: 'Application mobile adaptée aux réalités locales avec mode hors-ligne.',
    icon: GraduationCap,
    tags: ['Android', 'Offline-first', 'UI simple'],
    link: '#'
  }
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
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

  const Icon = project.icon

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
        className="relative h-full glass rounded-2xl p-6 overflow-hidden transition-all duration-500"
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * -5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg) translateZ(10px)` 
            : 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)',
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 flex items-center justify-center group-hover:from-neon-cyan group-hover:to-neon-blue transition-all duration-300 flex-shrink-0">
            <Icon className="w-7 h-7 text-neon-cyan group-hover:text-black transition-colors" />
          </div>
          
          <div className="flex-1">
            <span className="px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-medium">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mt-3 mb-2 font-display group-hover:text-neon-cyan transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-white/60 text-sm mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 text-xs rounded bg-white/5 text-white/60 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link && (
              <a 
                href={project.link}
                className="inline-flex items-center gap-1 text-neon-cyan text-sm font-medium hover:underline"
              >
                En savoir plus
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 1px rgba(0, 245, 255, 0.3), 0 0 30px rgba(0, 245, 255, 0.1)`
          }}
        />
      </div>
    </div>
  )
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [filter, setFilter] = useState('Tous')

  const categories = ['Tous', 'Web', 'Mobile', 'Business', 'Éducation']

  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === filter)

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
      id="projects" 
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
              Nos Réalisations
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              Des solutions pour le <span className="gradient-text">Burkina Faso</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Découvrez nos réalisations : plateformes de gestion, sites web et applications mobiles adaptées aux réalités locales.
            </p>
          </div>

          <div className="reveal flex flex-wrap justify-center gap-2 mb-12" style={{ transitionDelay: '100ms' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-black'
                    : 'glass text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <div className="reveal text-center mt-12 glass rounded-2xl p-6" style={{ transitionDelay: '400ms' }}>
            <p className="text-white/70 text-lg mb-4">
              Plusieurs structures accompagnées au Burkina Faso
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary group inline-flex items-center gap-2"
            >
              Discuter de votre projet
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
