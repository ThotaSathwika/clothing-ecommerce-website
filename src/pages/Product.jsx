import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Ruler, Truck, RotateCcw, X, ChevronDown } from 'lucide-react'
import Img from '../components/Img'
import ProductCard from '../components/ProductCard'
import { products, sizes, colors, rupee } from '../data'
import { useCart } from '../context/CartContext'

const sizeChart = [['XS', 34, 27], ['S', 36, 29], ['M', 38, 31], ['L', 41, 34], ['XL', 44, 37]]

function ProductView() {
  const { id } = useParams()
  const p = products.find((x) => x.id === Number(id))
  const { add } = useCart()
  const [img, setImg] = useState(0)
  const [color, setColor] = useState(p?.colors[0])
  const [size, setSize] = useState('')
  const [qty, setQty] = useState(1)
  const [err, setErr] = useState(false)
  const [guide, setGuide] = useState(false)
  const [openTab, setOpenTab] = useState('Details')

  if (!p) return <div className="py-40 text-center"><p>Product not found.</p><Link to="/shop" className="btn-dark mt-6">Back to shop</Link></div>

  const addToBag = () => { if (!size) return setErr(true); setErr(false); add(p, size, color, qty) }
  const related = products.filter((x) => x.cat === p.cat && x.id !== p.id).concat(products.filter((x) => x.cat !== p.cat)).slice(0, 4)

  return (
    <section className="container-x py-10">
      <p className="mb-6 text-xs uppercase tracking-[0.2em] text-ink/50"><Link to="/shop">Shop</Link> / <Link to={`/shop?cat=${p.cat}`}>{p.cat}</Link> / <span className="text-ink">{p.name}</span></p>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        {/* Gallery */}
        <div className="grid gap-3 md:grid-cols-[90px_1fr]">
          <div className="order-2 flex gap-3 md:order-1 md:flex-col">
            {p.images.map((src, i) => (
              <button key={i} onClick={() => setImg(i)} className={`aspect-[3/4] w-20 overflow-hidden bg-stone md:w-full ${img === i ? 'ring-2 ring-ink' : 'opacity-60 hover:opacity-100'}`}>
                <Img src={src} alt={`${p.name} view ${i + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[3/4] overflow-hidden bg-stone md:order-2">
            <Img key={img} src={p.images[img]} alt={p.name} className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Info */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          {p.badge && <span className="label !text-clay">{p.badge}</span>}
          <h1 className="text-4xl font-bold md:text-5xl">{p.name}</h1>
          <p className="mt-3 text-2xl">{rupee(p.price)}</p>
          <p className="text-xs text-ink/50">Inclusive of all taxes</p>

          <div className="mt-8"><p className="label">Colour — <span className="text-ink">{color}</span></p>
            <div className="flex gap-3">{p.colors.map((c) => (
              <button key={c} onClick={() => setColor(c)} title={c} className={`h-9 w-9 rounded-full ring-offset-2 ring-offset-bone transition ${color === c ? 'ring-2 ring-ink' : 'ring-1 ring-ink/20'}`} style={{ background: colors[c] }} />
            ))}</div></div>

          <div className="mt-8">
            <div className="flex justify-between"><p className="label">Size</p><button onClick={() => setGuide(true)} className="flex items-center gap-1 text-xs underline"><Ruler className="h-3.5 w-3.5" /> Size guide</button></div>
            <div className="grid grid-cols-5 gap-2">{sizes.map((s) => {
              const ok = p.sizes.includes(s)
              return <button key={s} disabled={!ok} onClick={() => { setSize(s); setErr(false) }} className={`border py-3 text-sm font-semibold transition ${!ok ? 'cursor-not-allowed border-ink/10 text-ink/25 line-through' : size === s ? 'border-ink bg-ink text-bone' : 'border-ink/25 hover:border-ink'}`}>{s}</button>
            })}</div>
            {err && <p className="mt-2 text-sm text-clay">Please select a size.</p>}
          </div>

          <div className="mt-8 flex gap-3">
            <div className="flex items-center border border-ink/25">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3.5"><Minus className="h-4 w-4" /></button>
              <span className="w-8 text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4 py-3.5"><Plus className="h-4 w-4" /></button>
            </div>
            <button onClick={addToBag} className="btn-dark flex-1">Add to bag</button>
          </div>

          <div className="mt-6 space-y-2 text-sm text-ink/70">
            <p className="flex items-center gap-2"><Truck className="h-4 w-4" /> Free delivery in 3–5 days on orders above ₹2,999</p>
            <p className="flex items-center gap-2"><RotateCcw className="h-4 w-4" /> Free 15-day returns & exchanges</p>
          </div>

          <div className="mt-8 border-t border-ink/10">
            {[['Details', p.desc], ['Fabric & care', '100% natural fibres. Machine wash cold, inside out. Dry flat in shade. Do not tumble dry.'], ['Shipping', 'Ships in 24 hours from our Bengaluru warehouse. Cash on delivery available.']].map(([t, body]) => (
              <div key={t} className="border-b border-ink/10">
                <button onClick={() => setOpenTab(openTab === t ? '' : t)} className="flex w-full items-center justify-between py-4 text-xs font-semibold uppercase tracking-[0.2em]">{t}<ChevronDown className={`h-4 w-4 transition ${openTab === t ? 'rotate-180' : ''}`} /></button>
                {openTab === t && <p className="pb-4 text-sm text-ink/70">{body}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24"><h2 className="mb-10 text-3xl font-bold uppercase md:text-4xl">You may also like</h2>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">{related.map((r) => <ProductCard key={r.id} p={r} />)}</div></div>

      {guide && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" onClick={() => setGuide(false)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md animate-slideIn bg-bone p-8">
            <div className="mb-6 flex justify-between"><h3 className="text-2xl font-bold">Size Guide</h3><button onClick={() => setGuide(false)}><X /></button></div>
            <table className="w-full text-sm"><thead><tr className="border-b border-ink/20 text-left"><th className="py-2">Size</th><th>Chest (in)</th><th>Waist (in)</th></tr></thead>
              <tbody>{sizeChart.map(([s, c, w]) => <tr key={s} className="border-b border-ink/10"><td className="py-2 font-semibold">{s}</td><td>{c}</td><td>{w}</td></tr>)}</tbody></table>
            <p className="mt-4 text-xs text-ink/60">Between sizes? Our fits are relaxed — size down for a closer fit.</p>
          </div>
        </div>
      )}
    </section>
  )
}

// Re-mount on product change so colour/size selections reset
export default function Product() {
  const { id } = useParams()
  return <ProductView key={id} />
}
