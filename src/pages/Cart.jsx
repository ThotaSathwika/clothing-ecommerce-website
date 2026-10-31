import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { rupee } from '../data'

export default function Cart() {
  const { items, update, subtotal } = useCart()
  const shipping = subtotal >= 2999 || subtotal === 0 ? 0 : 149

  if (!items.length) return (
    <section className="container-x py-32 text-center">
      <h1 className="text-5xl font-bold uppercase">Your bag is empty</h1>
      <p className="mt-4 text-ink/60">Good things are waiting.</p>
      <Link to="/shop" className="btn-dark mt-8">Continue shopping</Link>
    </section>
  )

  return (
    <section className="container-x py-12">
      <h1 className="mb-10 text-5xl font-bold uppercase md:text-6xl">Your Bag</h1>
      <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {items.map((i) => (
            <li key={i.key} className="flex gap-5 py-6">
              <Link to={`/product/${i.id}`}><img src={i.img} alt={i.name} className="h-36 w-28 object-cover" /></Link>
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-4"><Link to={`/product/${i.id}`} className="font-medium">{i.name}</Link><button onClick={() => update(i.key, 0)} aria-label="Remove"><X className="h-4 w-4" /></button></div>
                <p className="mt-1 text-sm text-ink/60">{i.color} · Size {i.size}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center border border-ink/20">
                    <button onClick={() => update(i.key, i.qty - 1)} className="p-2"><Minus className="h-3 w-3" /></button><span className="w-8 text-center text-sm">{i.qty}</span><button onClick={() => update(i.key, i.qty + 1)} className="p-2"><Plus className="h-3 w-3" /></button>
                  </div>
                  <p className="font-semibold">{rupee(i.price * i.qty)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <aside className="h-fit bg-stone p-8">
          <h2 className="mb-6 text-xl font-bold uppercase">Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{rupee(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping ? rupee(shipping) : 'Free'}</span></div>
            {shipping > 0 && <p className="text-xs text-clay">Add {rupee(2999 - subtotal)} more for free shipping.</p>}
            <div className="flex justify-between border-t border-ink/20 pt-4 text-lg font-semibold"><span>Total</span><span>{rupee(subtotal + shipping)}</span></div>
          </div>
          <Link to="/checkout" className="btn-dark mt-8 w-full">Checkout</Link>
          <Link to="/shop" className="mt-4 block text-center text-xs uppercase tracking-[0.2em] underline">Continue shopping</Link>
        </aside>
      </div>
    </section>
  )
}
