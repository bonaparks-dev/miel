import { useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ConfirmationPage from './pages/ConfirmationPage'
import MentionsLegales from './legal/MentionsLegales'
import CGV from './legal/CGV'
import Confidentialite from './legal/Confidentialite'
import { getCart, addToCart, updateQuantity } from './utils/cart'
import type { CartItem } from './utils/cart'

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(getCart)

  function handleAddToCart(item: Omit<CartItem, 'quantity'>) {
    const updated = addToCart(item)
    setCart([...updated])
  }

  function handleUpdateQuantity(id: string, qty: number) {
    const updated = updateQuantity(id, qty)
    setCart([...updated])
  }

  const handleCartClear = useCallback(() => {
    setCart([])
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header cart={cart} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produit" element={<ProductPage onAddToCart={handleAddToCart} />} />
          <Route path="/panier" element={<CartPage cart={cart} onUpdateQuantity={handleUpdateQuantity} />} />
          <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
          <Route path="/confirmation" element={<ConfirmationPage onCartClear={handleCartClear} />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
        </Routes>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  )
}
