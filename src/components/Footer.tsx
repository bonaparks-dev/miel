import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-noir text-ivory-dark mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-semibold text-ivory mb-3">
              Miel de Fleurs
            </h3>
            <p className="text-sm text-gris-light leading-relaxed">
              Château de Jeurre<br />
              91590 Morigny-Champigny, France
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ivory mb-3 uppercase tracking-wider">
              Informations
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/mentions-legales" className="text-gris-light hover:text-honey transition-colors no-underline">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="text-gris-light hover:text-honey transition-colors no-underline">
                  Conditions générales de vente
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="text-gris-light hover:text-honey transition-colors no-underline">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ivory mb-3 uppercase tracking-wider">
              Contact
            </h4>
            <p className="text-sm text-gris-light leading-relaxed">
              contact@chateau-jeurre.fr<br />
              +33 1 XX XX XX XX
            </p>
          </div>
        </div>

        <div className="border-t border-noir-light mt-8 pt-6 text-center text-xs text-gris-light">
          &copy; {new Date().getFullYear()} SARL Château de Jeurre. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
