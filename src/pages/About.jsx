import Img from '../components/Img'
import Reveal from '../components/Reveal'
import { aboutImg, lookbook } from '../data'

export default function About() {
  return (
    <>
      <section className="container-x py-16 text-center">
        <p className="label">Our story</p>
        <h1 className="mx-auto max-w-4xl text-5xl font-bold uppercase leading-none md:text-8xl">Made slowly, worn forever.</h1>
      </section>
      <Img src={aboutImg} alt="Noir Thread studio" className="h-[60vh] w-full object-cover" />
      <section className="container-x grid gap-12 py-24 md:grid-cols-2">
        <Reveal><h2 className="text-4xl font-bold">Started in 2020 with one perfect T-shirt.</h2></Reveal>
        <Reveal delay={150} className="space-y-4 text-ink/70">
          <p>Noir Thread was founded in Bengaluru by two friends tired of clothes that fell apart after ten washes. We spent a year developing a single heavyweight tee — and it sold out in a weekend.</p>
          <p>Today we make a tight wardrobe of essentials with family-run workshops in Tiruppur and Jaipur. Every partner is audited for fair wages, and 80% of our fabrics are organic or recycled.</p>
        </Reveal>
      </section>
      <section className="grid bg-ink text-bone md:grid-cols-3">
        {[['80%', 'Organic or recycled fibres'], ['6', 'Partner workshops in India'], ['0', 'Single-use plastic in packaging']].map(([n, l]) => (
          <div key={l} className="border-bone/10 p-12 text-center md:border-r"><p className="font-display text-6xl font-bold">{n}</p><p className="mt-2 text-sm uppercase tracking-[0.2em] text-bone/60">{l}</p></div>
        ))}
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4">{lookbook.map((s, i) => <Img key={i} src={s} alt={`Studio ${i}`} className="aspect-square w-full object-cover" />)}</section>
    </>
  )
}
