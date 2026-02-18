import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-ivory-dark overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <img
            src="/logo.png"
            alt="Miel de Fleurs – Château de Jeurre"
            className="mx-auto mb-8 w-64 md:w-80 h-auto"
          />
          <p className="font-display text-lg md:text-xl text-gris italic max-w-2xl mx-auto leading-relaxed">
            Récolté dans les ruches du Château de Jeurre
          </p>
          <p className="text-gris max-w-xl mx-auto mt-4 leading-relaxed text-sm">
            Un miel artisanal récolté à froid dans les jardins séculaires du Château de Jeurre.
            Non chauffé, non filtré &mdash; la pureté d'un terroir d'exception.
          </p>
          <Link
            to="/produit"
            className="inline-block mt-8 bg-honey text-noir font-semibold px-8 py-3 rounded hover:bg-honey-dark transition-colors no-underline text-sm uppercase tracking-wider"
          >
            Découvrir notre miel
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <ValueCard
            title="Artisanal"
            description="Récolté à la main dans nos ruchers, chaque pot est le fruit d'un savoir-faire transmis de génération en génération."
          />
          <ValueCard
            title="100% Français"
            description="Nos abeilles butinent les fleurs sauvages de l'Essonne, au cœur du domaine du Château de Jeurre."
          />
          <ValueCard
            title="Pur & Naturel"
            description="Non chauffé, non filtré, sans additif. Un miel brut qui préserve toutes ses qualités nutritionnelles."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-noir text-ivory py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-semibold mb-4">
            Pot de 500g &mdash; 12,00 &euro;
          </h2>
          <p className="text-gris-light mb-6">
            Prix au kilo : 24,00 &euro;/kg &middot; Livraison en France métropolitaine
          </p>
          <Link
            to="/produit"
            className="inline-block bg-honey text-noir font-semibold px-8 py-3 rounded hover:bg-honey-dark transition-colors no-underline text-sm uppercase tracking-wider"
          >
            Commander
          </Link>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <div className="w-12 h-12 bg-honey rounded-full mx-auto mb-4 flex items-center justify-center">
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
          <polygon points="10,1 19,6 19,16 10,21 1,16 1,6" fill="#1C1C1C" />
        </svg>
      </div>
      <h3 className="font-display text-xl font-semibold text-noir mb-2">{title}</h3>
      <p className="text-gris text-sm leading-relaxed">{description}</p>
    </div>
  )
}
