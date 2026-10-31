import { useState } from 'react'

const faqs = [
  ['How long does delivery take?', '3–5 working days across India. Metro cities usually in 2–3 days.'],
  ['What is your return policy?', 'Free returns and exchanges within 15 days. We pick up from your doorstep.'],
  ['Do you ship internationally?', 'Currently we ship within India only. International shipping is coming soon.'],
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section className="container-x grid gap-16 py-16 lg:grid-cols-2">
      <div>
        <h1 className="text-5xl font-bold uppercase md:text-7xl">Contact</h1>
        <p className="mt-4 text-ink/60">We reply within one working day.</p>
        <div className="mt-10 space-y-6 text-sm">
          <div><p className="label">Customer care</p><p>care@noirthread.in · +91 80 4567 8900</p><p className="text-ink/60">Mon–Sat, 10 AM – 7 PM</p></div>
          <div><p className="label">Flagship store</p><p>12, 100 Feet Road, Indiranagar, Bengaluru 560038</p></div>
        </div>
        <iframe title="Store map" loading="lazy" className="mt-8 h-64 w-full grayscale" src="https://www.google.com/maps?q=100+Feet+Road+Indiranagar+Bengaluru&output=embed" />
        <div className="mt-12"><h2 className="mb-4 text-2xl font-bold uppercase">FAQ</h2>
          {faqs.map(([q, a]) => <details key={q} className="border-b border-ink/10 py-4"><summary className="cursor-pointer font-medium">{q}</summary><p className="mt-2 text-sm text-ink/60">{a}</p></details>)}</div>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); setSent(true); e.target.reset() }} className="h-fit space-y-5 bg-stone p-8 md:p-12">
        <h2 className="text-2xl font-bold uppercase">Send a message</h2>
        <div><label className="label">Name</label><input required className="input" /></div>
        <div><label className="label">Email</label><input required type="email" className="input" /></div>
        <div><label className="label">Order number (optional)</label><input className="input" /></div>
        <div><label className="label">Message</label><textarea required rows={5} className="input" /></div>
        <button className="btn-dark w-full">Send</button>
        {sent && <p className="text-center text-sm text-green-700">Message sent — we’ll be in touch soon.</p>}
      </form>
    </section>
  )
}
