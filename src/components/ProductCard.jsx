import { Link } from 'react-router-dom'
import Img from './Img'
import { colors, rupee } from '../data'

export default function ProductCard({ p }) {
  return (
    <Link to={`/product/${p.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone">
        <Img src={p.images[0]} alt={p.name} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:opacity-0" />
        <Img src={p.images[1]} alt={`${p.name} alternate`} className="absolute inset-0 h-full w-full scale-105 object-cover !opacity-0 transition duration-700 group-hover:scale-100 group-hover:!opacity-100" />
        {p.badge && <span className="absolute left-3 top-3 bg-bone px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest">{p.badge}</span>}
        <span className="absolute inset-x-3 bottom-3 translate-y-4 bg-ink py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-bone opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">Quick view</span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-sans text-sm font-medium">{p.name}</h3>
          <div className="mt-2 flex gap-1.5">{p.colors.map((c) => <span key={c} title={c} className="h-3 w-3 rounded-full ring-1 ring-ink/20" style={{ background: colors[c] }} />)}</div>
        </div>
        <p className="text-sm font-semibold">{rupee(p.price)}</p>
      </div>
    </Link>
  )
}
