import type { Product } from '../utils/products'

interface Props {
  product: Product
  onAddToCart: () => void
}

export default function ProductLabelCard({ product, onAddToCart }: Props) {
  return (
    <div className="bg-white border border-ivory-dark rounded-lg overflow-hidden shadow-sm max-w-md mx-auto">
      {/* Product image / label */}
      <div className="bg-ivory-dark flex items-center justify-center p-8">
        <img
          src="/logo.png"
          alt={`${product.name} – ${product.subtitle}`}
          className="w-full max-w-xs h-auto"
        />
      </div>

      <div className="p-6 space-y-4">
        {/* Price */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-3xl font-display font-bold text-noir">
              {product.priceUnit.toFixed(2)} &euro;
            </span>
            <span className="text-sm text-gris ml-2">TTC</span>
          </div>
          <span className="text-sm text-gris">
            {product.pricePerKg.toFixed(2)} &euro;/kg
          </span>
        </div>

        {/* Regulatory info */}
        <div className="border-t border-ivory-dark pt-4 space-y-2 text-sm text-noir-light">
          <InfoRow label="Dénomination" value={product.name} />
          <InfoRow label="Poids net" value={product.weight} />
          <InfoRow label="Origine" value={product.origin} />
          <InfoRow label="DDM" value={product.ddm} />
          <InfoRow label="Conservation" value={product.conservation} />
          <InfoRow label="Producteur" value={product.producer} />
          <InfoRow label="Adresse" value={product.producerAddress} />
          <InfoRow label="Lot" value={product.lot} />
        </div>

        {/* Add to cart */}
        <button
          onClick={onAddToCart}
          className="w-full bg-honey text-noir font-semibold py-3 rounded hover:bg-honey-dark transition-colors cursor-pointer text-sm uppercase tracking-wider"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-2">
      <span className="text-gris shrink-0">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  )
}
