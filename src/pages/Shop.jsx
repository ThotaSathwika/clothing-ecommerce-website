import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories, sizes, colors } from '../data'

export default function Shop({ title = 'Shop All', items = products, intro }) {
  const [params, setParams] = useSearchParams()
  const [selSizes, setSelSizes] = useState([])
  const [selColors, setSelColors] = useState([])
  const [maxPrice, setMaxPrice] = useState(10000)
  const [sort, setSort] = useState('new')
  const [panel, setPanel] = useState(false)
  const cat = params.get('cat') || 'All'

  const toggle = (list, setList, v) => setList(list.includes(v) ? list.filter((x) => x !== v) : [...list, v])

  const filtered = useMemo(() => {
    const list = items.filter((p) =>
      (cat === 'All' || p.cat === cat) && p.price <= maxPrice &&
      (!selSizes.length || selSizes.some((s) => p.sizes.includes(s))) &&
      (!selColors.length || selColors.some((c) => p.colors.includes(c))))
    if (sort === 'low') return [...list].sort((a, b) => a.price - b.price)
    if (sort === 'high') return [...list].sort((a, b) => b.price - a.price)
    return [...list].sort((a, b) => b.id - a.id)
  }, [items, cat, maxPrice, selSizes, selColors, sort])

  const reset = () => { setSelSizes([]); setSelColors([]); setMaxPrice(10000); setParams({}) }

  const Filters = (
    <div className="space-y-8">
      <div><p className="label">Category</p>
        <ul className="space-y-2 text-sm">{['All', ...categories].map((c) => (
          <li key={c}><button onClick={() => setParams(c === 'All' ? {} : { cat: c })} className={`hover:opacity-60 ${cat === c ? 'font-semibold underline underline-offset-4' : 'text-ink/70'}`}>{c}</button></li>
        ))}</ul></div>
      <div><p className="label">Size</p>
        <div className="grid grid-cols-5 gap-2">{sizes.map((s) => (
          <button key={s} onClick={() => toggle(selSizes, setSelSizes, s)} className={`border py-2 text-xs font-semibold ${selSizes.includes(s) ? 'border-ink bg-ink text-bone' : 'border-ink/20 hover:border-ink'}`}>{s}</button>
        ))}</div></div>
      <div><p className="label">Colour</p>
        <div className="flex flex-wrap gap-3">{Object.entries(colors).map(([name, hex]) => (
          <button key={name} title={name} onClick={() => toggle(selColors, setSelColors, name)} className={`h-8 w-8 rounded-full ring-1 ring-ink/20 ring-offset-2 ring-offset-bone transition ${selColors.includes(name) ? '!ring-2 !ring-ink' : ''}`} style={{ background: hex }} />
        ))}</div></div>
      <div><p className="label">Max price: ₹{maxPrice.toLocaleString('en-IN')}</p>
        <input type="range" min="1000" max="10000" step="500" value={maxPrice} onChange={(e) => setMaxPrice(+e.target.value)} className="w-full accent-ink" /></div>
      <button onClick={reset} className="text-xs font-semibold uppercase tracking-[0.2em] underline">Clear filters</button>
    </div>
  )

  return (
    <section className="container-x py-12">
      <div className="mb-10 border-b border-ink/10 pb-8">
        <h1 className="text-5xl font-bold uppercase md:text-7xl">{title}</h1>
        {intro && <p className="mt-3 max-w-xl text-ink/60">{intro}</p>}
      </div>
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">{Filters}</aside>
        <div>
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-ink/60">{filtered.length} products</p>
            <div className="flex gap-3">
              <button onClick={() => setPanel(true)} className="flex items-center gap-2 border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest lg:hidden"><SlidersHorizontal className="h-4 w-4" /> Filter</button>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="border border-ink/20 bg-transparent px-3 py-2 text-xs font-semibold uppercase tracking-widest outline-none">
                <option value="new">Newest</option><option value="low">Price ↑</option><option value="high">Price ↓</option>
              </select>
            </div>
          </div>
          {filtered.length ? <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3">{filtered.map((p) => <ProductCard key={p.id} p={p} />)}</div>
            : <p className="py-24 text-center text-ink/50">No products match these filters.</p>}
        </div>
      </div>
      {panel && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden" onClick={() => setPanel(false)}>
          <div onClick={(e) => e.stopPropagation()} className="absolute left-0 top-0 h-full w-80 overflow-y-auto bg-bone p-6">
            <div className="mb-8 flex justify-between"><h3 className="text-2xl font-bold">Filter</h3><button onClick={() => setPanel(false)}><X /></button></div>
            {Filters}
            <button onClick={() => setPanel(false)} className="btn-dark mt-10 w-full">Show {filtered.length} items</button>
          </div>
        </div>
      )}
    </section>
  )
}
