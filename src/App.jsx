import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TogetherCounter from './components/TogetherCounter'
import MemoryGallery from './components/MemoryGallery'
import Timeline from './components/Timeline'
import LoveLetter from './components/LoveLetter'
import SurpriseMessages from './components/SurpriseMessages'
import AnniversaryMessage from './components/AnniversaryMessage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-svh overflow-x-clip bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-rose-deep focus:px-5 focus:py-2.5 focus:text-[12px] focus:uppercase focus:tracking-[0.18em] focus:text-ivory"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <TogetherCounter />
        <MemoryGallery />
        <Timeline />
        <LoveLetter />
        <SurpriseMessages />
        <AnniversaryMessage />
      </main>

      <Footer />
    </div>
  )
}

export default App
