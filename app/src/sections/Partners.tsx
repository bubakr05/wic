import { useRef, useEffect } from 'react'

const partners = [
  { name: 'Smartsystems', initial: 'SS' },
  { name: 'Burco Sarl', initial: 'BS' },
  { name: 'Feng Lee Office', initial: 'FLO' },
  { name: 'Ets Yam', initial: 'EY' },
  { name: 'SPCNLS', initial: 'SP' },
  { name: 'Royal St Louis', initial: 'RSL' },
  { name: 'SakSey', initial: 'SK' },
  { name: 'ETs Sinon', initial: 'ES' },
  { name: 'Zimport', initial: 'ZI' },
  { name: 'Meptune Sarl', initial: 'MS' },
]

const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth / 2

    const animate = () => {
      if (scrollContainer.scrollLeft >= scrollWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [])

  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="relative py-16 overflow-hidden border-y border-white/10">
      <div className="section-padding mb-8">
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-full glass text-neon-cyan text-sm font-medium mb-4">
            Ils nous font confiance
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-display">
            Nos partenaires et clients
          </h2>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide py-4 px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 glass rounded-xl p-6 w-44 h-28 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 flex items-center justify-center group-hover:from-neon-cyan/30 group-hover:to-neon-blue/30 transition-all duration-300">
              <span className="text-neon-cyan font-bold text-sm">
                {partner.initial}
              </span>
            </div>
            <span className="text-white/70 text-xs text-center font-medium truncate w-full">
              {partner.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Partners
