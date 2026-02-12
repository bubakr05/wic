import { useRef, useEffect, useState } from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'E-commerce Immersif',
    category: 'Web 3D',
    description: 'Plateforme e-commerce avec expérience 3D immersive et personnalisation produit en temps réel.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['Three.js', 'React', 'Node.js'],
    link: '#',
    github: '#'
  },
  {
    title: 'Dashboard IA',
    category: 'Solutions IA',
    description: 'Tableau de bord intelligent avec analytics prédictive et visualisation de données avancée.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Python', 'TensorFlow', 'React'],
    link: '#',
    github: '#'
  },
  {
    title: 'App Mobile Fintech',
    category: 'Apps Mobiles',
    description: 'Application bancaire mobile avec interface moderne et fonctionnalités de paiement innovantes.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase', 'Stripe'],
    link: '#',
    github: '#'
  },
  {
    title: 'Site Vitrine 3D',
    category: 'Web 3D',
    description: 'Site web immersif avec animations 3D, parallax scrolling et expérience utilisateur unique.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['WebGL', 'GSAP', 'Vue.js'],
    link: '#',
    github: '#'
  },
  {
    title: 'Chatbot Enterprise',
    category: 'Solutions IA',
    description: 'Assistant virtuel intelligent pour automatiser le support client et améliorer l\'engagement.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    tags: ['NLP', 'OpenAI', 'Python'],
    link: '#',
    github: '#'
  },
  {
    title: 'Marketing Automation',
    category: 'Marketing Digital',
    description: 'Plateforme d\'automatisation marketing avec campagnes personnalisées et analytics en temps réel.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['HubSpot', 'Analytics', 'API'],
    link: '#',
    github: '#'
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
        className="relative h-full glass rounded-2xl overflow-hidden transition-all duration-500"
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * -5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg) translateZ(10px)` 
            : 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)',
          transition: 'transform 0.3s ease-out'
        }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full glass text-neon-cyan text-xs font-medium">
              {project.category}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-neon-cyan transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
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

          {/* Actions */}
          <div className="flex items-center gap-3">
            {project.link && (
              <a 
                href={project.link}
                className="flex items-center gap-1 text-neon-cyan text-sm font-medium hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Voir le projet
              </a>
            )}
            {project.github && (
              <a 
                href={project.github}
                className="flex items-center gap-1 text-white/60 text-sm hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
        </div>

        {/* Border Glow */}
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

  const categories = ['Tous', 'Web 3D', 'Solutions IA', 'Apps Mobiles', 'Marketing Digital']

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
          {/* Section Header */}
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
              Nos Réalisations
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              Projets <span className="gradient-text">innovants</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Découvrez nos dernières réalisations qui repoussent les limites du digital.
            </p>
          </div>

          {/* Filter Tabs */}
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* View All CTA */}
          <div className="reveal text-center mt-12" style={{ transitionDelay: '400ms' }}>
            <button className="btn-outline group inline-flex items-center gap-2">
              Voir tous les projets
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
