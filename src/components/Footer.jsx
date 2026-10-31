import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, ArrowRight } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  return (
    <footer className="bg-ink text-bone">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-extrabold">NOIR<span className="font-medium">THREAD</span></p>
          <p className="mt-4 max-w-xs text-sm text-bone/60">Considered essentials, made responsibly in Tiruppur and Jaipur. Join the list for early access to drops.</p>
          {done ? <p className="mt-6 text-sm text-bone/80">You’re on the list. Welcome!</p> : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true) }} className="mt-6 flex max-w-sm border-b border-bone/40">
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-bone/40" />
              <button aria-label="Subscribe"><ArrowRight className="h-5 w-5" /></button>
            </form>
          )}
        </div>
        {[['Shop', [['/shop', 'All products'], ['/collections', 'Collections'], ['/shop?cat=Outerwear', 'Outerwear'], ['/shop?cat=Knitwear', 'Knitwear']]],
          ['Help', [['/contact', 'Contact us'], ['/contact', 'Shipping'], ['/contact', 'Returns'], ['/contact', 'Size guide']]],
          ['Brand', [['/about', 'Our story'], ['/about', 'Sustainability'], ['/contact', 'Stores']]]].map(([t, ls]) => (
          <div key={t}><h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]">{t}</h4>
            <ul className="space-y-2 text-sm text-bone/60">{ls.map(([to, l]) => <li key={l}><Link to={to} className="hover:text-bone">{l}</Link></li>)}</ul></div>
        ))}
      </div>
      <div className="container-x flex items-center justify-between border-t border-bone/10 py-6 text-xs text-bone/50">
        <span>© {new Date().getFullYear()} Noir Thread</span><a href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
      </div>
    </footer>
  )
}
