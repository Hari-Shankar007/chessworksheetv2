import { Mail, Twitter, Github } from 'lucide-react'

const CTA_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4'

export default function CTA() {
  return (
    <section className="relative w-full bg-background overflow-hidden">
      {/* Video — native aspect ratio */}
      <video
        className="w-full h-auto block"
        src={CTA_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="max-w-[1831px] w-full mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-end">
            <div className="relative lg:pr-[20%] lg:pl-[15%]">

              {/* Cursive "Go beyond" accent */}
              <span
                className="absolute -top-8 sm:-top-10 lg:-top-16 left-0 font-condiment text-[17px] sm:text-[30px] md:text-[50px] lg:text-[68px] text-neon -rotate-1 opacity-90 pointer-events-none select-none whitespace-nowrap"
                style={{ mixBlendMode: 'exclusion' }}
              >
                Go beyond
              </span>

              {/* Main heading */}
              <div className="text-right">
                <h2 className="font-grotesk text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px] uppercase text-cream leading-[1.05] mb-4 sm:mb-6 md:mb-10 lg:mb-12">
                  JOIN US.
                </h2>
                <h2 className="font-grotesk text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px] uppercase text-cream leading-[1.05]">
                  REVEAL WHAT'S HIDDEN.
                  <br />
                  DEFINE WHAT'S NEXT.
                  <br />
                  FOLLOW THE SIGNAL.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-left Social Icons */}
      <div className="absolute left-[8%] bottom-[12%] sm:bottom-[14%] lg:bottom-[20%]">
        <div className="liquid-glass rounded-[0.5rem] sm:rounded-[0.875rem] lg:rounded-[1.25rem] flex flex-col overflow-hidden">
          {[Mail, Twitter, Github].map((Icon, i) => (
            <button
              key={i}
              className={`
                flex items-center justify-center text-cream hover:bg-white/10 transition-all duration-300
                w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem]
                h-[14vw] sm:h-[4.6875rem] md:h-[3.515625rem] lg:h-[5.46875rem]
                ${i < 2 ? 'border-b border-white/10' : ''}
              `}
            >
              <Icon
                className="w-[3.5vw] sm:w-5 md:w-4 lg:w-6 h-[3.5vw] sm:h-5 md:h-4 lg:h-6"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
