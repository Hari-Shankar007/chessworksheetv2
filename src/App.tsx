import Hero from './components/Hero'
import About from './components/About'
import Collection from './components/Collection'
import CTA from './components/CTA'

export default function App() {
  return (
    <div className="relative bg-background min-h-screen">
      {/* Full-screen fixed texture overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none w-full h-full"
        style={{
          backgroundImage: 'url(/texture.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'lighten',
          opacity: 0.6,
        }}
      />

      {/* Sections */}
      <Hero />
      <About />
      <Collection />
      <CTA />
    </div>
  )
}
