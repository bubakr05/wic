import { ArrowUp, Heart } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Développement Web 3D', href: '#services' },
      { name: 'Solutions IA', href: '#services' },
      { name: 'Apps Mobiles', href: '#services' },
      { name: 'Marketing Digital', href: '#services' },
    ],
    company: [
      { name: 'À propos', href: '#about' },
      { name: 'Projets', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Mentions légales', href: '#' },
      { name: 'Politique de confidentialité', href: '#' },
    ]
  }

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a 
                href="#" 
                className="flex items-center gap-2 mb-4"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToTop()
                }}
              >
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-lg opacity-80" />
                  <span className="relative text-black font-bold text-xl font-display">W</span>
                </div>
                <div>
                  <span className="text-white font-semibold text-lg font-display">Web</span>
                  <span className="text-neon-cyan font-semibold text-lg font-display">Info</span>
                  <span className="text-white font-semibold text-lg font-display">Com</span>
                </div>
              </a>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Agence digitale innovante spécialisée dans la transformation numérique, 
                le développement web 3D et les solutions d'intelligence artificielle.
              </p>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <span>Fait avec</span>
                <Heart className="w-4 h-4 text-neon-pink fill-neon-pink" />
                <span>à Ouagadougou</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4 font-display">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/60 hover:text-neon-cyan text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4 font-display">Entreprise</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/60 hover:text-neon-cyan text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4 font-display">Légal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-neon-cyan text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {currentYear} Web Info Com. Tous droits réservés.
            </p>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-white/60 hover:text-neon-cyan text-sm transition-colors duration-300"
            >
              <span>Retour en haut</span>
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-neon-cyan/20 group-hover:border-neon-cyan/50 transition-all duration-300">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
