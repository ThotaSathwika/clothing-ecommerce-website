import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, CheckCircle2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { rupee } from '../data'

export default function Checkout() {
  const { items, subtotal, clear } = useCart()
  const [step, setStep] = useState(1)
  const [ship, setShip] = useState({ email: '', name: '', phone: '', address: '', city: '', pin: '' })
  const [method, setMethod] = useState('card')
  const [card, setCard] = useState({ number: '', exp: '', cvv: '' })
  const [order, setOrder] = useState(null)
  const [busy, setBusy] = useState(false)
  const shipping = subtotal >= 2999 ? 0 : 149
  const cod = method === 'cod' ? 49 : 0
  const total = subtotal + shipping + cod
  const s = (k) => (e) => setShip({ ...ship, [k]: e.target.value })

  // Format card number in groups of 4
  const fmtCard = (v) => v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()

  const pay = (e) => {
    e.preventDefault()
    setBusy(true)
    setTimeout(() => { setOrder({ id: 'NT' + Date.now().toString().slice(-7), total, email: ship.email }); clear(); setBusy(false) }, 1800)
  }

  if (order) return (
    <section className="container-x max-w-xl py-28 text-center">
      <CheckCircle2 className="mx-auto h-16 w-16 text-green-600" strokeWidth={1.4} />
      <h1 className="mt-6 text-4xl font-bold uppercase">Thank you!</h1>
      <p className="mt-4 text-ink/70">Order <b>#{order.id}</b> is confirmed. A receipt for {rupee(order.total)} has been sent to {order.email}.</p>
      <p className="mt-2 text-xs text-ink/50">This is a demo checkout — no payment was taken.</p>
      <Link to="/shop" className="btn-dark mt-10">Keep shopping</Link>
    </section>
  )

  if (!items.length) return <section className="py-32 text-center"><p>Your bag is empty.</p><Link to="/shop" className="btn-dark mt-6">Shop now</Link></section>

  return (
    <section className="container-x py-12">
      <h1 className="mb-3 text-4xl font-bold uppercase md:text-5xl">Checkout</h1>
      <div className="mb-10 flex gap-6 text-xs font-semibold uppercase tracking-[0.2em]">
        {['Shipping', 'Payment'].map((t, i) => <span key={t} className={step >= i + 1 ? 'text-ink' : 'text-ink/30'}>{i + 1}. {t}</span>)}
      </div>
      <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
        {step === 1 ? (
          <form onSubmit={(e) => { e.preventDefault(); setStep(2) }} className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2"><label className="label">Email</label><input required type="email" className="input" value={ship.email} onChange={s('email')} /></div>
            <div><label className="label">Full name</label><input required className="input" value={ship.name} onChange={s('name')} /></div>
            <div><label className="label">Phone</label><input required pattern="\d{10}" title="10 digits" className="input" value={ship.phone} onChange={s('phone')} /></div>
            <div className="sm:col-span-2"><label className="label">Address</label><input required className="input" value={ship.address} onChange={s('address')} /></div>
            <div><label className="label">City</label><input required className="input" value={ship.city} onChange={s('city')} /></div>
            <div><label className="label">PIN code</label><input required pattern="\d{6}" title="6 digits" className="input" value={ship.pin} onChange={s('pin')} /></div>
            <button className="btn-dark sm:col-span-2">Continue to payment</button>
          </form>
        ) : (
          <form onSubmit={pay} className="space-y-5">
            <div className="bg-stone p-4 text-sm"><p className="label !mb-1">Ship to</p>{ship.name}, {ship.address}, {ship.city} {ship.pin} <button type="button" onClick={() => setStep(1)} className="float-right underline">Edit</button></div>
            {[['card', 'Credit / Debit card'], ['upi', 'UPI'], ['cod', 'Cash on delivery (+₹49)']].map(([k, l]) => (
              <label key={k} className={`flex cursor-pointer items-center gap-3 border p-4 text-sm ${method === k ? 'border-ink' : 'border-ink/20'}`}><input type="radio" checked={method === k} onChange={() => setMethod(k)} className="accent-ink" />{l}</label>
            ))}
            {method === 'card' && (
              <div className="grid grid-cols-2 gap-4">
                <input required className="input col-span-2" placeholder="Card number (try 4242 4242 4242 4242)" value={card.number} onChange={(e) => setCard({ ...card, number: fmtCard(e.target.value) })} />
                <input required className="input" placeholder="MM/YY" maxLength={5} value={card.exp} onChange={(e) => setCard({ ...card, exp: e.target.value })} />
                <input required className="input" placeholder="CVV" maxLength={3} value={card.cvv} onChange={(e) => setCard({ ...card, cvv: e.target.value.replace(/\D/g, '') })} />
              </div>
            )}
            {method === 'upi' && <input required className="input" placeholder="name@upi" />}
            <button disabled={busy} className="btn-dark w-full"><Lock className="h-4 w-4" /> {busy ? 'Processing…' : `Pay ${rupee(total)}`}</button>
            <p className="text-center text-xs text-ink/50">Demo checkout · No real payment is processed</p>
          </form>
        )}
        <aside className="h-fit bg-stone p-8">
          <ul className="space-y-4">{items.map((i) => (
            <li key={i.key} className="flex gap-4 text-sm"><img src={i.img} alt={i.name} className="h-20 w-16 object-cover" /><div className="flex-1"><p>{i.name}</p><p className="text-ink/60">{i.color} · {i.size} · ×{i.qty}</p></div><p>{rupee(i.price * i.qty)}</p></li>
          ))}</ul>
          <div className="mt-6 space-y-2 border-t border-ink/20 pt-4 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{rupee(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping ? rupee(shipping) : 'Free'}</span></div>
            {cod > 0 && <div className="flex justify-between"><span>COD fee</span><span>{rupee(cod)}</span></div>}
            <div className="flex justify-between pt-2 text-lg font-semibold"><span>Total</span><span>{rupee(total)}</span></div>
          </div>
        </aside>
      </div>
    </section>
  )
}
