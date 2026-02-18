import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { CartItem } from '../utils/cart'
import { cartTotal } from '../utils/cart'
import { SHIPPING_COST, FREE_SHIPPING_THRESHOLD } from '../utils/products'
// Stripe checkout is handled server-side. The backend creates a Checkout Session
// and returns the session URL for redirect. See /api/create-checkout-session.

interface Props {
  cart: CartItem[]
}

export default function CheckoutPage({ cart }: Props) {
  const [acceptCGV, setAcceptCGV] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  })

  const subtotal = cartTotal(cart)
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
  const total = subtotal + shipping

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!acceptCGV) {
      setError('Vous devez accepter les conditions générales de vente.')
      return
    }

    setLoading(true)

    try {
      // Call your backend API to create a Stripe Checkout Session.
      // The backend uses the Stripe secret key to create the session,
      // then returns the session URL for redirect.
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart.map((item) => ({
            name: `${item.name} - ${item.weight}`,
            unitAmount: Math.round(item.priceUnit * 100),
            quantity: item.quantity,
          })),
          shipping: Math.round(shipping * 100),
          customerEmail: form.email,
          shippingAddress: form,
          successUrl: `${window.location.origin}/confirmation`,
          cancelUrl: `${window.location.origin}/panier`,
        }),
      })

      if (!response.ok) {
        throw new Error('Erreur serveur')
      }

      const { url } = await response.json()
      window.location.href = url
    } catch {
      setError("Une erreur est survenue lors du paiement. Veuillez réessayer.")
    } finally {
      setLoading(false)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-noir mb-4">Panier vide</h1>
        <p className="text-gris mb-8">Ajoutez des produits avant de passer commande.</p>
        <Link
          to="/produit"
          className="inline-block bg-honey text-noir font-semibold px-8 py-3 rounded hover:bg-honey-dark transition-colors no-underline text-sm uppercase tracking-wider"
        >
          Voir le produit
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-noir mb-8">Finaliser la commande</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Delivery form */}
        <div className="space-y-6">
          <h2 className="font-display text-xl font-semibold text-noir">Adresse de livraison</h2>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Prénom" name="firstName" value={form.firstName} onChange={handleChange} required />
            <Field label="Nom" name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>
          <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
          <Field label="Téléphone" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
          <Field label="Adresse" name="address" value={form.address} onChange={handleChange} required />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Code postal" name="postalCode" value={form.postalCode} onChange={handleChange} required />
            <Field label="Ville" name="city" value={form.city} onChange={handleChange} required />
          </div>
        </div>

        {/* Right: Order summary */}
        <div>
          <div className="bg-white border border-ivory-dark rounded-lg p-6 space-y-4 sticky top-24">
            <h2 className="font-display text-xl font-semibold text-noir">Récapitulatif</h2>

            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.name} ({item.weight}) &times; {item.quantity}
                </span>
                <span className="font-semibold">
                  {(item.priceUnit * item.quantity).toFixed(2)} &euro;
                </span>
              </div>
            ))}

            <div className="border-t border-ivory-dark pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gris">Sous-total</span>
                <span>{subtotal.toFixed(2)} &euro;</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gris">Livraison</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-700">Gratuite</span>
                  ) : (
                    `${shipping.toFixed(2)} \u20AC`
                  )}
                </span>
              </div>
              <div className="border-t border-ivory-dark pt-2 flex justify-between font-semibold text-lg">
                <span>Total TTC</span>
                <span>{total.toFixed(2)} &euro;</span>
              </div>
            </div>

            {/* CGV checkbox */}
            <label className="flex items-start gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={acceptCGV}
                onChange={(e) => setAcceptCGV(e.target.checked)}
                className="mt-0.5 accent-honey"
              />
              <span>
                J'accepte les{' '}
                <Link to="/cgv" className="text-honey-dark underline" target="_blank">
                  conditions générales de vente
                </Link>{' '}
                et la{' '}
                <Link to="/confidentialite" className="text-honey-dark underline" target="_blank">
                  politique de confidentialité
                </Link>
                . *
              </span>
            </label>

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-noir text-ivory font-semibold py-3 rounded hover:bg-noir-light transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
            >
              {loading ? 'Redirection...' : 'Commander et payer'}
            </button>

            <p className="text-xs text-gris text-center">
              Paiement sécurisé par Stripe. Vos données bancaires ne sont jamais stockées sur nos serveurs.
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required,
}: {
  label: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-noir-light mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-ivory-dark rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-honey focus:ring-1 focus:ring-honey"
      />
    </div>
  )
}
