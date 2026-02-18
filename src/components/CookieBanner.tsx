import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCookieConsent, setCookieConsent } from '../utils/cookies'

export default function CookieBanner() {
  const [consent, setConsent] = useState(getCookieConsent)

  if (consent !== null) return null

  function handleAccept() {
    setCookieConsent('accepted')
    setConsent('accepted')
  }

  function handleRefuse() {
    setCookieConsent('refused')
    setConsent('refused')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-noir text-ivory p-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm flex-1">
          Ce site utilise des cookies strictement necessaires au fonctionnement du panier
          et au traitement des paiements. Aucun cookie publicitaire n'est utilise.{' '}
          <Link to="/confidentialite" className="text-honey underline">
            En savoir plus
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleRefuse}
            className="px-4 py-2 text-sm border border-gris-light text-gris-light rounded hover:bg-noir-light transition-colors cursor-pointer"
          >
            Refuser
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-honey text-noir font-semibold rounded hover:bg-honey-dark transition-colors cursor-pointer"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
