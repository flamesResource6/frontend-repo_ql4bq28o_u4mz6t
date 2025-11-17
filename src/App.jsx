import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
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
      <Navbar />

      <main>
        <Hero onCTAClick={handleStartLearning} />
        <Features />
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
