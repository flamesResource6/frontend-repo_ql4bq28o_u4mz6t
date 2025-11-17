import { useEffect, useState } from 'react'
import { BookOpen, Code, Database, Figma, Cloud, Smartphone } from 'lucide-react'

const iconMap = {
  'Web Development': Code,
  'Data Science': Database,
  'Design': Figma,
  'Cloud & DevOps': Cloud,
  'Mobile': Smartphone,
  'AI & ML': BookOpen,
}

export default function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${base}/categories`).then(r => r.json()).then(d => setCategories(d.items || [])).catch(() => {})
  }, [])

  return (
    <section id="categories" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#111827]">Explore Categories</h2>
        <p className="mt-2 text-[#4b5563]">Pick a path and start building real skills.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const Icon = iconMap[cat.name] || BookOpen
          return (
            <div key={cat.id} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563eb]/10 text-[#2563eb]">
                <Icon size={20} />
              </div>
              <h3 className="text-xl font-semibold text-[#111827]">{cat.name}</h3>
              <p className="mt-2 text-sm text-[#6b7280]">{cat.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
