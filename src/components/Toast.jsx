import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Toast() {
  const { toast } = useCart()
  if (!toast) return null
  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex w-[92%] max-w-md -translate-x-1/2 animate-slideIn items-center gap-3 bg-ink p-4 text-sm text-bone shadow-2xl">
      <Check className="h-5 w-5 shrink-0 text-green-400" /><span className="flex-1">{toast}</span>
      <Link to="/cart" className="text-xs font-bold uppercase tracking-widest underline">View bag</Link>
    </div>
  )
}
