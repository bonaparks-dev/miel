import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { clearCart } from '../utils/cart'

interface Props {
  onCartClear: () => void
}

export default function ConfirmationPage({ onCartClear }: Props) {
  useEffect(() => {
    clearCart()
    onCartClear()
  }, [onCartClear])

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="font-display text-3xl font-bold text-noir mb-4">
        Commande confirmee !
      </h1>
      <p className="text-gris leading-relaxed mb-2">
        Merci pour votre commande. Un email de confirmation a ete envoye a votre adresse.
      </p>
      <p className="text-gris leading-relaxed mb-8">
        Votre miel sera prepare et expedie sous 48 heures ouvrees.
      </p>

      <Link
        to="/"
        className="inline-block bg-honey text-noir font-semibold px-8 py-3 rounded hover:bg-honey-dark transition-colors no-underline text-sm uppercase tracking-wider"
      >
        Retour a l'accueil
      </Link>
    </div>
  )
}
