import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('nt-cart')) || [] } catch { return [] }
  })
  const [toast, setToast] = useState(null)

  useEffect(() => { localStorage.setItem('nt-cart', JSON.stringify(items)) }, [items])

  // Each cart line is a unique product + size + colour combination
  const add = (product, size, color, qty = 1) => {
    const key = `${product.id}-${size}-${color}`
    setItems((prev) => {
      const found = prev.find((i) => i.key === key)
      if (found) return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i))
      return [...prev, { key, id: product.id, name: product.name, price: product.price, img: product.images[0], size, color, qty }]
    })
    setToast(`${product.name} (${size}, ${color}) added to bag`)
    setTimeout(() => setToast(null), 2500)
  }
  const update = (key, qty) => setItems((p) => (qty < 1 ? p.filter((i) => i.key !== key) : p.map((i) => (i.key === key ? { ...i, qty } : i))))
  const clear = () => setItems([])
  const count = items.reduce((s, i) => s + i.qty, 0)
  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)

  return <CartContext.Provider value={{ items, add, update, clear, count, subtotal, toast }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
