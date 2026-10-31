import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toast from './components/Toast'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Shop from './pages/Shop'
import { Collections, CollectionDetail } from './pages/Collections'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:slug" element={<CollectionDetail />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <Toast />
    </CartProvider>
  )
}
