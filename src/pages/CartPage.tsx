import { Link } from 'react-router-dom'
import type { CartItem } from '../utils/cart'
import { cartTotal } from '../utils/cart'
import { SHIPPING_COST, FREE_SHIPPING_THRESHOLD } from '../utils/products'

interface Props {
  cart: CartItem[]
  onUpdateQuantity: (id: string, qty: number) => void
}

export default function CartPage({ cart, onUpdateQuantity }: Props) {
  const subtotal = cartTotal(cart)
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
  const total = subtotal + shipping

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-noir mb-4">Votre panier est vide</h1>
        <p className="text-gris mb-8">Decouvrez notre miel artisanal du Chateau de Jeurre.</p>
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
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-noir mb-8">Votre panier</h1>

      <div className="space-y-4 mb-8">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-ivory-dark rounded-lg p-4 flex items-center gap-4"
          >
            <div className="w-16 h-16 bg-ivory-dark rounded flex items-center justify-center shrink-0">
              <svg width="24" height="27" viewBox="0 0 24 27" fill="none">
                <polygon points="12,1 23,7 23,20 12,26 1,20 1,7" fill="#E4B92C" stroke="#1C1C1C" strokeWidth="1" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-noir">{item.name}</h3>
              <p className="text-sm text-gris">{item.weight} &middot; {item.pricePerKg.toFixed(2)} &euro;/kg</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 border border-ivory-dark rounded flex items-center justify-center text-noir hover:bg-ivory-dark transition-colors cursor-pointer"
                aria-label="Diminuer la quantite"
              >
                &minus;
              </button>
              <span className="w-8 text-center font-semibold">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 border border-ivory-dark rounded flex items-center justify-center text-noir hover:bg-ivory-dark transition-colors cursor-pointer"
                aria-label="Augmenter la quantite"
              >
                +
              </button>
            </div>

            <div className="text-right shrink-0 w-20">
              <p className="font-semibold text-noir">{(item.priceUnit * item.quantity).toFixed(2)} &euro;</p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white border border-ivory-dark rounded-lg p-6 space-y-3">
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
        {subtotal < FREE_SHIPPING_THRESHOLD && (
          <p className="text-xs text-gris">
            Livraison gratuite a partir de {FREE_SHIPPING_THRESHOLD.toFixed(2)} &euro; d'achat
          </p>
        )}
        <div className="border-t border-ivory-dark pt-3 flex justify-between font-semibold text-lg">
          <span>Total TTC</span>
          <span>{total.toFixed(2)} &euro;</span>
        </div>
      </div>

      <div className="mt-6">
        <Link
          to="/checkout"
          className="block w-full bg-honey text-noir font-semibold py-3 rounded hover:bg-honey-dark transition-colors no-underline text-center text-sm uppercase tracking-wider"
        >
          Passer commande
        </Link>
      </div>
    </div>
  )
}
