import { Link } from 'react-router-dom'
import type { CartItem } from '../utils/cart'

interface HeaderProps {
  cart: CartItem[]
}

export default function Header({ cart }: HeaderProps) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-ivory border-b border-ivory-dark sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img
            src="/logo.png"
            alt="Miel de Fleurs – Château de Jeurre"
            className="h-12 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm text-noir-light hover:text-honey-dark transition-colors no-underline hidden sm:inline"
          >
            Accueil
          </Link>
          <Link
            to="/produit"
            className="text-sm text-noir-light hover:text-honey-dark transition-colors no-underline"
          >
            Notre Miel
          </Link>
          <Link
            to="/panier"
            className="relative text-noir-light hover:text-honey-dark transition-colors no-underline"
            aria-label={`Panier (${totalItems} articles)`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-honey text-noir text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
