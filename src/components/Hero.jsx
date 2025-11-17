import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eef2ff] via-white to-[#e0f2fe]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#2563eb]/15 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#10b981]/15 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-[#111827] shadow-sm ring-1 ring-gray-200">
              <span className="h-2 w-2 rounded-full bg-[#10b981]" />
              New courses every week
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0b1220] sm:text-6xl">
              Level up with Alidiamond
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[#374151]">
              Learn modern skills with curated, project‑based courses taught by experts. Build a standout portfolio and accelerate your career.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onCTAClick}
                className="rounded-xl bg-[#111827] px-6 py-3 font-semibold text-white shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-300"
              >
                Start learning
              </button>
              <a
                href="#pricing"
                className="rounded-xl border border-[#2563eb]/20 bg-white px-6 py-3 font-semibold text-[#2563eb] shadow-sm transition hover:bg-[#2563eb]/5"
              >
                View pricing
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-[#6b7280]">
              <div>
                <p className="font-semibold text-[#111827]">40k+</p>
                <p>Learners</p>
              </div>
              <div>
                <p className="font-semibold text-[#111827]">350+</p>
                <p>Courses</p>
              </div>
              <div>
                <p className="font-semibold text-[#111827]">4.8/5</p>
                <p>Average rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-xl">
              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop"
                alt="Students collaborating"
                className="rounded-2xl shadow-2xl ring-1 ring-black/5"
              />
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
                alt="Design sprint"
                className="absolute -bottom-8 -left-8 hidden w-40 rounded-xl shadow-xl ring-1 ring-black/5 sm:block"
              />
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
                alt="Coding session"
                className="absolute -top-8 -right-8 hidden w-40 rounded-xl shadow-xl ring-1 ring-black/5 sm:block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
