import { Mail, Twitter, Github } from 'lucide-react'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4'

function SocialButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {[Mail, Twitter, Github].map((Icon, i) => (
        <button
          key={i}
          className="liquid-glass rounded-[1rem] w-14 h-14 flex items-center justify-center hover:bg-white/10 transition-all duration-300 text-cream"
        >
          <Icon size={20} />
        </button>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen rounded-b-[32px] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-background/30" />

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-[1831px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col">

        {/* Header bar */}
        <div className="flex items-center justify-between pt-8">
          {/* Logo */}
          <span className="font-grotesk text-base uppercase text-cream tracking-wider">
            Orbis.Nft
          </span>

          {/* Desktop Nav */}
          <nav className="liquid-glass hidden lg:flex items-center rounded-[28px] px-[52px] py-[24px] gap-10">
            {['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-grotesk text-[13px] uppercase text-cream hover:text-neon transition-colors duration-200 tracking-wider"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Social Icons */}
          <SocialButtons className="hidden lg:flex" />
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="lg:ml-32 max-w-[780px]">
            <div className="relative inline-block">
              <h1 className="font-grotesk text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase text-cream leading-[1.05] sm:leading-[1]">
                Beyond earth
                <br />
                and ( its ) familiar
                <br />
                boundaries
              </h1>

              {/* Cursive accent */}
              <span
                className="absolute -right-4 top-1/2 font-condiment text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-neon -rotate-1 opacity-90 pointer-events-none select-none whitespace-nowrap"
                style={{ mixBlendMode: 'exclusion' }}
              >
                Nft collection
              </span>
            </div>

            {/* Mobile Social Icons */}
            <SocialButtons className="lg:hidden mt-8 justify-center" />
          </div>
        </div>
      </div>

      {/* Desktop Social icons — top right fixed in section */}
      <div className="absolute top-8 right-8 lg:hidden" />
    </section>
  )
}
