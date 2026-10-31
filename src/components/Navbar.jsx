import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

const links = [['/shop', 'Shop'], ['/collections', 'Collections'], ['/about', 'About'], ['/contact', 'Contact']]

export default function Navbar() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const transparent = pathname === '/' && !scrolled && !open

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <div className="bg-ink py-2 text-center text-[11px] uppercase tracking-[0.25em] text-bone">Free shipping over ₹2,999 · Easy 15-day returns</div>
      <header className={`sticky top-0 z-40 transition duration-300 ${transparent ? 'bg-transparent text-white' : 'bg-bone/95 text-ink shadow-sm backdrop-blur'} ${pathname === '/' ? '-mb-[72px]' : ''}`}>
        <nav className="container-x grid h-[72px] grid-cols-3 items-center">
          <div className="hidden gap-8 md:flex">
            {links.map(([to, l]) => <NavLink key={to} to={to} className={({ isActive }) => `text-xs font-semibold uppercase tracking-[0.2em] hover:opacity-60 ${isActive ? 'underline underline-offset-8' : ''}`}>{l}</NavLink>)}
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
          <Link to="/" className="text-center font-display text-2xl font-extrabold tracking-tight">NOIR<span className="font-medium">THREAD</span></Link>
          <Link to="/cart" className="relative justify-self-end" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-clay text-[10px] font-bold text-white">{count}</span>}
          </Link>
        </nav>
        {open && <div className="container-x flex flex-col gap-5 bg-bone pb-8 pt-2 text-ink md:hidden">{links.map(([to, l]) => <Link key={to} to={to} className="font-display text-3xl font-bold">{l}</Link>)}</div>}
      </header>
    </>
  )
}
