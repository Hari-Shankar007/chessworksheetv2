const NFT_CARDS = [
  {
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
    score: '8.7/10',
  },
  {
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
    score: '9/10',
  },
  {
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
    score: '8.2/10',
  },
]

function ChevronRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export default function Collection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-[1831px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-10">

          {/* Left: Heading */}
          <div>
            <h2 className="font-grotesk text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase text-cream leading-[1]">
              Collection of
            </h2>
            <div className="ml-12 sm:ml-24 lg:ml-32">
              <span className="font-condiment text-[36px] sm:text-[50px] md:text-[58px] lg:text-[68px] text-neon normal-case">
                Space{' '}
              </span>
              <span className="font-grotesk text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase text-cream leading-[1]">
                objects
              </span>
            </div>
          </div>

          {/* Right: CTA button */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="flex items-baseline gap-2 cursor-pointer group">
              <span className="font-grotesk text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase text-cream group-hover:text-neon transition-colors duration-300">
                SEE
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-grotesk text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase text-cream group-hover:text-neon transition-colors duration-300">
                  ALL
                </span>
                <span className="font-grotesk text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase text-cream group-hover:text-neon transition-colors duration-300">
                  CREATORS
                </span>
              </div>
            </div>
            {/* Neon underline bar */}
            <div className="bg-neon h-[6px] sm:h-[8px] lg:h-[10px] w-full mt-2 rounded-full" />
          </div>
        </div>

        {/* NFT Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NFT_CARDS.map((card, i) => (
            <div
              key={i}
              className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Square video container */}
              <div className="relative w-full pb-[100%] rounded-[24px] overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={card.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Overlay rarity bar */}
              <div className="liquid-glass rounded-[20px] px-5 py-4 mt-3 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase text-cream/70 tracking-wider mb-0.5">
                    Rarity Score:
                  </p>
                  <p className="font-grotesk text-[16px] uppercase text-cream">
                    {card.score}
                  </p>
                </div>

                {/* Purple arrow button */}
                <button className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform duration-200 flex-shrink-0">
                  <ChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
