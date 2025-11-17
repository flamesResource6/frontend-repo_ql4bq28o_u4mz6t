import { useEffect, useState } from 'react'
import { Menu, X, ChevronDown, PlayCircle, BookOpen, Users, DollarSign, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = 'text-sm text-[#374151] hover:text-[#111827] transition-colors'

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/80 border-b border-gray-100 shadow-[0_1px_0_0_rgba(17,24,39,0.03)]' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#10b981] shadow-inner" />
            <span className="font-extrabold tracking-tight text-[#111827]">Alidiamond</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#categories" className={linkClass}>Categories</a>
            <a href="#instructors" className={linkClass}>Instructors</a>
            <div className="group relative">
              <button className={`${linkClass} inline-flex items-center gap-1`}>
                Resources <ChevronDown size={16} className="opacity-70" />
              </button>
              <div className="invisible absolute left-1/2 z-40 mt-3 w-[520px] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-4 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-3">
                  <a href="#" className="flex items-start gap-3 rounded-xl p-3 hover:bg-gray-50">
                    <PlayCircle className="text-[#2563eb]" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">Getting Started</p>
                      <p className="text-xs text-[#6b7280]">Kick off your learning journey fast.</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start gap-3 rounded-xl p-3 hover:bg-gray-50">
                    <BookOpen className="text-[#10b981]" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">Guides & Playbooks</p>
                      <p className="text-xs text-[#6b7280]">Step-by-step roadmaps and curricula.</p>
                    </div>
                  </a>
                  <a href="#pricing" className="flex items-start gap-3 rounded-xl p-3 hover:bg-gray-50">
                    <DollarSign className="text-[#2563eb]" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">Pricing</p>
                      <p className="text-xs text-[#6b7280]">Simple plans that scale with you.</p>
                    </div>
                  </a>
                  <a href="#instructors" className="flex items-start gap-3 rounded-xl p-3 hover:bg-gray-50">
                    <Users className="text-[#10b981]" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">Community</p>
                      <p className="text-xs text-[#6b7280]">Learn with peers and mentors.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-[#2563eb] hover:text-[#1d4ed8]">Sign in</a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-[#111827] px-4 py-2 text-white shadow-sm transition hover:shadow">
              <Sparkles size={16} className="text-emerald-300" />
              Get started
            </a>
          </div>

          <button className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden origin-top overflow-hidden border-t border-gray-100 bg-white transition-all ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="grid gap-3">
            <a href="#categories" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-[#374151] hover:bg-gray-50">Categories</a>
            <a href="#instructors" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-[#374151] hover:bg-gray-50">Instructors</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-[#374151] hover:bg-gray-50">Pricing</a>
            <a href="#" className="rounded-lg px-3 py-2 text-[#374151] hover:bg-gray-50">Guides</a>
            <a href="#" className="rounded-lg px-3 py-2 text-[#374151] hover:bg-gray-50">Community</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#111827] px-4 py-2 font-medium text-white">Start free</a>
          </div>
        </div>
      </div>
    </header>
  )
}
