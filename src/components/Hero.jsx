import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#e0e7ff] via-white to-[#dbeafe]" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f3f4f6] px-3 py-1 text-sm text-[#111827] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#10b981]" />
            New courses every week
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#111827] sm:text-6xl">
            Alidiamond
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#374151]">
            Learn modern skills with curated courses taught by expert instructors. Build real projects. Level up fast.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={onCTAClick}
              className="rounded-xl bg-[#10b981] px-6 py-3 font-semibold text-white shadow-md transition transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              Start Learning
            </button>
            <a
              href="#pricing"
              className="rounded-xl border border-[#2563eb]/20 bg-white px-6 py-3 font-semibold text-[#2563eb] shadow-sm transition hover:bg-[#2563eb]/5"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#2563eb]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#10b981]/20 blur-3xl" />
    </section>
  )
}
