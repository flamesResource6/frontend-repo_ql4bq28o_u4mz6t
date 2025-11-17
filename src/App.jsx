import { useRef } from 'react'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Instructors from './components/Instructors'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  const categoriesRef = useRef(null)

  const handleStartLearning = () => {
    categoriesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111827]">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#2563eb]" />
            <span className="text-lg font-bold">Alidiamond</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-[#4b5563]">
            <a href="#categories" className="hover:text-[#111827]">Categories</a>
            <a href="#instructors" className="hover:text-[#111827]">Instructors</a>
            <a href="#pricing" className="hover:text-[#111827]">Pricing</a>
          </nav>
          <a href="#pricing" className="rounded-xl bg-[#10b981] px-4 py-2 text-white font-semibold shadow-sm hover:shadow">Join now</a>
        </div>
      </header>

      <main>
        <Hero onCTAClick={handleStartLearning} />
        <div ref={categoriesRef}>
          <Categories />
        </div>
        <Instructors />
        <Pricing />
      </main>

      <Footer />
    </div>
  )
}

export default App
