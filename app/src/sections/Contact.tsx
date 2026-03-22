import { useRef, useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react'

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+226 71 46 08 02',
    href: 'https://wa.me/22671460802'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@webinfocom.bf',
    href: 'mailto:contact@webinfocom.bf'
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+226 71 46 08 02',
    href: 'tel:+22671460802'
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Ouagadougou, Burkina Faso',
    href: '#'
  }
]

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0, 245, 255, 0.08) 0%, transparent 50%)`
        }}
      />

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
              Parlons de votre projet
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              Vous avez une idée d'application ou besoin d'un <span className="gradient-text">site web</span> ?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Contactez-nous dès maintenant. Réponse rapide garantie.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="reveal" style={{ transitionDelay: '100ms' }}>
                <h3 className="text-xl font-bold text-white mb-6 font-display">
                  Contactez-nous
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 flex items-center justify-center group-hover:from-neon-cyan group-hover:to-neon-blue transition-all duration-300">
                          <Icon className="w-5 h-5 text-neon-cyan group-hover:text-black transition-colors" />
                        </div>
                        <div>
                          <div className="text-white/50 text-sm">{item.label}</div>
                          <div className="text-white font-medium">{item.value}</div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="reveal glass rounded-2xl p-6 bg-green-500/10 border border-green-500/30" style={{ transitionDelay: '200ms' }}>
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                  <h4 className="text-lg font-bold text-white">
                    Réponse rapide garantie
                  </h4>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Contactez-nous directement sur WhatsApp pour une réponse immédiate.
                </p>
                <a 
                  href="https://wa.me/22671460802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Écrire sur WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 reveal" style={{ transitionDelay: '200ms' }}>
              <div className="glass-strong rounded-2xl p-6 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-neon-cyan/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-neon-cyan" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                    <p className="text-white/60">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">
                          WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                          placeholder="+226 XX XX XX XX"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                          Type de projet *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-background">Sélectionnez un type</option>
                          <option value="site-web" className="bg-background">Site web professionnel</option>
                          <option value="app-web" className="bg-background">Application web</option>
                          <option value="app-mobile" className="bg-background">Application mobile</option>
                          <option value="gestion-scolaire" className="bg-background">Logiciel de gestion scolaire (GESCO)</option>
                          <option value="gestion-entreprise" className="bg-background">Outil de gestion d'entreprise</option>
                          <option value="autre" className="bg-background">Autre projet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                        Décrivez votre projet *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300 resize-none"
                        placeholder="Décrivez votre besoin, vos objectifs et votre budget approximatif..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Demander un devis gratuit
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
