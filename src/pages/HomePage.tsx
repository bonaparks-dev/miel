import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      {/* Hero with video background */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <img
            src="/logo.png"
            alt="Miel de Fleurs – Château de Jeurre"
            className="mx-auto mb-8 w-64 md:w-80 h-auto drop-shadow-lg"
          />
          <p className="font-display text-lg md:text-xl text-white/90 italic max-w-2xl mx-auto leading-relaxed drop-shadow">
            Récolté dans les ruches du Château de Jeurre
          </p>
          <p className="text-white/75 max-w-xl mx-auto mt-4 leading-relaxed text-sm drop-shadow">
            Un miel artisanal récolté à froid dans les jardins séculaires du Château de Jeurre.
            Non chauffé, non filtré &mdash; la pureté d'un terroir d'exception.
          </p>
          <Link
            to="/produit"
            className="inline-block mt-8 bg-honey text-noir font-semibold px-8 py-3 rounded hover:bg-honey-dark transition-colors no-underline text-sm uppercase tracking-wider shadow-lg"
          >
            Découvrir notre miel
          </Link>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
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

      {/* Formats CTA */}
      <section className="bg-noir text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-semibold mb-8">
            Nos formats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <FormatCard weight="250 g" price="7,00" perKg="28,00" soldOut />
            <FormatCard weight="500 g" price="12,00" perKg="24,00" tag="Populaire" />
            <FormatCard weight="1 kg" price="22,00" perKg="22,00" tag="Meilleur prix" highlight />
          </div>
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

function FormatCard({
  weight,
  price,
  perKg,
  soldOut,
  tag,
  highlight,
}: {
  weight: string
  price: string
  perKg: string
  soldOut?: boolean
  tag?: string
  highlight?: boolean
}) {
  return (
    <div
      className={`relative rounded-lg p-4 text-center ${
        soldOut
          ? 'bg-noir-light opacity-50'
          : highlight
            ? 'bg-green-900/30 border border-green-500/40'
            : 'bg-noir-light'
      }`}
    >
      {tag && (
        <span
          className={`absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
            highlight ? 'bg-green-500 text-white' : 'bg-honey text-noir'
          }`}
        >
          {tag}
        </span>
      )}
      <p className="font-display text-xl font-bold text-white">{weight}</p>
      <p className="text-lg font-semibold text-honey mt-1">{price} &euro;</p>
      <p className="text-xs text-gris-light">{perKg} &euro;/kg</p>
      {soldOut && <p className="text-xs text-red-400 font-semibold mt-1">Épuisé</p>}
    </div>
  )
}
