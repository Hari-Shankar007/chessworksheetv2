const ABOUT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4'

const BODY_TEXT =
  'A DIGITAL OBJECT FIXED BEYOND TIME AND PLACE. AN EXPLORATION OF DISTANCE, FORM, AND SILENCE IN SPACE'

export default function About() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={ABOUT_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/20" />

      {/* Content */}
      <div className="relative z-10 max-w-[1831px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 flex flex-col gap-16 lg:gap-24 h-full">

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20">

          {/* Left: Heading */}
          <div className="relative">
            <h2 className="font-grotesk text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase text-cream leading-[1]">
              Hello!
              <br />
              I'm orbis
            </h2>
            {/* Cursive "Orbis" accent */}
            <span
              className="absolute -bottom-4 right-0 lg:-right-8 font-condiment text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px] text-neon rotate-[-2deg] opacity-90 pointer-events-none select-none"
              style={{ mixBlendMode: 'exclusion' }}
            >
              Orbis
            </span>
          </div>

          {/* Right: Description */}
          <p className="font-mono text-[14px] sm:text-[16px] uppercase text-cream max-w-[266px] leading-relaxed">
            {BODY_TEXT}
          </p>
        </div>

        {/* Bottom Row — decorative ghost text */}
        <div className="flex flex-row justify-between gap-8 mt-auto">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <p className="font-mono text-[13px] sm:text-[14px] uppercase text-background lg:text-cream/10 leading-relaxed max-w-[320px]">
              {BODY_TEXT}
            </p>
            <p className="font-mono text-[13px] sm:text-[14px] uppercase text-background lg:text-cream/10 leading-relaxed max-w-[320px]">
              {BODY_TEXT}
            </p>
          </div>

          {/* Right column — desktop only */}
          <div className="hidden lg:flex flex-col gap-6 text-right">
            <p className="font-mono text-[13px] sm:text-[14px] uppercase text-cream/10 leading-relaxed max-w-[320px]">
              {BODY_TEXT}
            </p>
            <p className="font-mono text-[13px] sm:text-[14px] uppercase text-cream/10 leading-relaxed max-w-[320px]">
              {BODY_TEXT}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
