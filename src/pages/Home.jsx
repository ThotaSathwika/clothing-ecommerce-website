import { Link } from 'react-router-dom'
import { ArrowRight, Truck, RotateCcw, Leaf } from 'lucide-react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { heroImg, collections, products, lookbook } from '../data'

export default function Home() {
  return (
    <>
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <Img src={heroImg} alt="Autumn collection" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        <div className="container-x relative flex h-full flex-col justify-end pb-20 text-white">
          <p className="animate-fadeUp text-xs font-semibold uppercase tracking-[0.35em]">Autumn / Winter 2026</p>
          <h1 className="mt-4 max-w-4xl animate-fadeUp font-display text-6xl font-extrabold uppercase leading-[0.9] md:text-[8.5rem]" style={{ animationDelay: '.15s' }}>Quiet<br />Layers.</h1>
          <div className="mt-8 flex animate-fadeUp flex-wrap gap-4" style={{ animationDelay: '.3s' }}>
            <Link to="/collections/autumn-edit" className="btn-light">Shop the Edit</Link>
            <Link to="/shop" className="btn border border-white text-white hover:bg-white hover:text-ink">Shop All</Link>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-ink/10 bg-bone py-4">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-sm font-bold uppercase tracking-widest">
          {Array.from({ length: 2 }).flatMap((_, k) => ['Organic cotton', '✦', 'Made in India', '✦', 'Free returns', '✦', 'Timeless cuts', '✦', 'Small batches', '✦'].map((t, i) => <span key={`${k}-${i}`}>{t}</span>))}
        </div>
      </div>

      <section className="container-x py-24">
        <Reveal className="mb-12 flex items-end justify-between">
          <h2 className="text-4xl font-bold uppercase md:text-6xl">Collections</h2>
          <Link to="/collections" className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] md:flex">View all <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((c, i) => (
            <Reveal key={c.slug} delay={i * 120}>
              <Link to={`/collections/${c.slug}`} className="group relative block aspect-[3/4] overflow-hidden bg-stone">
                <Img src={c.img} alt={c.name} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white"><h3 className="text-3xl font-bold">{c.name}</h3><span className="mt-2 inline-block border-b border-white text-xs uppercase tracking-[0.2em]">Discover</span></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <Reveal className="mb-12 text-center"><p className="label">Most loved</p><h2 className="text-4xl font-bold uppercase md:text-6xl">Bestsellers & New</h2></Reveal>
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
          {products.filter((p) => p.badge).slice(0, 4).map((p, i) => <Reveal key={p.id} delay={i * 100}><ProductCard p={p} /></Reveal>)}
        </div>
        <div className="mt-14 text-center"><Link to="/shop" className="btn-dark">Shop all products</Link></div>
      </section>

      <section className="grid md:grid-cols-2">
        <Img src={lookbook[0]} alt="Lookbook" className="h-[520px] w-full object-cover md:h-[720px]" />
        <div className="flex flex-col justify-center bg-stone p-10 md:p-20">
          <Reveal>
            <p className="label">The philosophy</p>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">Buy less.<br />Choose well.<br />Make it last.</h2>
            <p className="mt-6 max-w-md text-ink/70">Every piece is designed to outlive trends — cut from natural fibres, made in small batches by partners we know by name.</p>
            <Link to="/about" className="btn-line mt-8">Our story</Link>
          </Reveal>
        </div>
      </section>

      <section className="container-x grid gap-8 py-16 md:grid-cols-3">
        {[[Truck, 'Free shipping', 'On all orders above ₹2,999'], [RotateCcw, '15-day returns', 'Free pickup from your door'], [Leaf, 'Responsibly made', 'Organic & recycled fibres']].map(([Icon, t, d]) => (
          <div key={t} className="flex items-center gap-4"><Icon className="h-7 w-7" strokeWidth={1.4} /><div><p className="text-sm font-semibold">{t}</p><p className="text-sm text-ink/60">{d}</p></div></div>
        ))}
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4">
        {lookbook.map((img, i) => <div key={i} className="group aspect-square overflow-hidden"><Img src={img} alt={`Look ${i + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /></div>)}
      </section>
    </>
  )
}
