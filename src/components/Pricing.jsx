import React, { useEffect, useState } from 'react'

export default function Pricing() {
  const plans = usePricing()
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-[#111827]">Simple, transparent pricing</h2>
        <p className="mt-2 text-[#4b5563]">Pick a plan and start learning today.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.id} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-xl font-semibold text-[#111827]">{p.name}</h3>
            <p className="mt-2 text-sm text-[#6b7280]">{p.period === 'forever' ? 'Free forever' : `per ${p.period}`}</p>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-[#2563eb]">{p.price === 0 ? 'Free' : `$${p.price}`}</span>
              {p.price !== 0 && <span className="text-[#6b7280]">/ {p.period}</span>}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[#4b5563]">
              {p.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#10b981]" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-xl bg-[#10b981] px-4 py-2 font-semibold text-white shadow-sm transition hover:shadow-md">Get started</button>
          </div>
        ))}
      </div>
    </section>
  )
}

function usePricing() {
  const [plans, setPlans] = useState([])
  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${base}/pricing`).then(r => r.json()).then(d => setPlans(d.plans || [])).catch(() => {})
  }, [])
  return plans
}
