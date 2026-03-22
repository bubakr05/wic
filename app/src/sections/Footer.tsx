import { ArrowUp, Heart } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Sites web professionnels', href: '#services' },
      { name: 'Applications web', href: '#services' },
      { name: 'Applications mobiles', href: '#services' },
      { name: 'Solutions sur mesure', href: '#services' },
      { name: 'Formation', href: '#services' },
    ],
    company: [
      { name: 'À propos', href: '#about' },
      { name: 'Réalisations', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
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
          {/* Positioning Statement */}
          <div className="text-center mb-12 p-6 glass rounded-2xl">
            <p className="text-white/90 text-lg md:text-xl font-medium">
              Nous aidons les entreprises et organisations au Burkina Faso à{' '}
              <span className="gradient-text font-bold">digitaliser leurs activités</span>{' '}
              grâce à des solutions web et mobiles adaptées.
            </p>
          </div>

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
                <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg bg-white/10 border border-neon-cyan/30 p-1">
                  <img 
                    src="/images/logowic.png" 
                    alt="WebInfoCom" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-white font-semibold text-lg font-display">Web</span>
                  <span className="text-neon-cyan font-semibold text-lg font-display">Info</span>
                  <span className="text-white font-semibold text-lg font-display">Com</span>
                </div>
              </a>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Solutions digitales adaptées aux réalités du Burkina Faso. 
                Sites web, applications et outils de gestion.
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

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 font-display">Contact</h4>
              <div className="space-y-3 text-white/60 text-sm">
                <p>📞 +226 71 46 08 02</p>
                <p>📧 contact@webinfocom.bf</p>
                <p>📍 Ouagadougou, Burkina Faso</p>
              </div>
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
