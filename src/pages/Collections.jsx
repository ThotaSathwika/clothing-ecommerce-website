import { Link, useParams } from 'react-router-dom'
import Img from '../components/Img'
import Shop from './Shop'
import { collections, products } from '../data'

export function Collections() {
  return (
    <section className="container-x py-12">
      <h1 className="mb-12 text-5xl font-bold uppercase md:text-7xl">Collections</h1>
      <div className="space-y-6">
        {collections.map((c, i) => (
          <Link key={c.slug} to={`/collections/${c.slug}`} className="group grid overflow-hidden bg-stone md:grid-cols-2">
            <div className={`h-[420px] overflow-hidden ${i % 2 ? 'md:order-2' : ''}`}><Img src={c.img} alt={c.name} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" /></div>
            <div className="flex flex-col justify-center p-10 md:p-16">
              <p className="label">{products.filter((p) => p.collection === c.slug).length} pieces</p>
              <h2 className="text-4xl font-bold md:text-5xl">{c.name}</h2>
              <p className="mt-4 max-w-sm text-ink/60">{c.desc}</p>
              <span className="btn-line mt-8 w-fit">Explore</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function CollectionDetail() {
  const { slug } = useParams()
  const c = collections.find((x) => x.slug === slug)
  if (!c) return <p className="py-40 text-center">Collection not found.</p>
  return (
    <>
      <div className="relative h-[50vh] min-h-[340px]">
        <Img src={c.img} alt={c.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <Shop title={c.name} intro={c.desc} items={products.filter((p) => p.collection === slug)} />
    </>
  )
}
