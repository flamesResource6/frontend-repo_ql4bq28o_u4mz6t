import { motion } from 'framer-motion'
import { Code, Figma, Database, Zap, Award, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Project-based learning',
    desc: 'Build real apps with hands-on, step-by-step guidance.',
  },
  {
    icon: Database,
    title: 'Job-ready skills',
    desc: 'Curricula mapped to in-demand roles and stacks.',
  },
  {
    icon: Figma,
    title: 'Design + Dev',
    desc: 'Balance visual craft with solid engineering practices.',
  },
  {
    icon: Zap,
    title: 'Live workshops',
    desc: 'Weekly sessions with Q&A and code reviews.',
  },
  {
    icon: Award,
    title: 'Certificates',
    desc: 'Shareable credentials as you level up.',
  },
  {
    icon: HeadphonesIcon,
    title: '1:1 mentoring',
    desc: 'Get feedback from experienced practitioners.',
  },
]

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-[#0b1220]">Why learners choose us</h2>
        <p className="mt-2 text-[#4b5563]">Everything you need to go from beginner to job‑ready.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563eb]/10 text-[#2563eb]">
              <f.icon size={20} />
            </div>
            <h3 className="text-lg font-semibold text-[#111827]">{f.title}</h3>
            <p className="mt-2 text-sm text-[#6b7280]">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
