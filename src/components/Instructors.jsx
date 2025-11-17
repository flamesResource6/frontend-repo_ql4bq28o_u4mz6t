import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

export default function Instructors() {
  const [instructors, setInstructors] = useState([])

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${base}/instructors`).then(r => r.json()).then(d => setInstructors(d.items || [])).catch(() => {})
  }, [])

  return (
    <section id="instructors" className="bg-[#f9fafb]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#111827]">Meet the Instructors</h2>
          <p className="mt-2 text-[#4b5563]">Industry experts with a passion for teaching.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((ins) => (
            <div key={ins.id} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#111827]">{ins.name}</h3>
                  <p className="text-sm text-[#6b7280]">{ins.title}</p>
                </div>
                <div className="flex items-center gap-1 text-[#f59e0b]">
                  <Star size={16} fill="#f59e0b" className="text-[#f59e0b]" />
                  <span className="text-sm font-medium text-[#111827]">{ins.rating}</span>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#4b5563]">{ins.bio}</p>
              <p className="mt-4 text-xs text-[#6b7280]">{ins.students.toLocaleString()} students</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
