import { useState } from 'react'
import { HONEY_PRODUCT } from '../utils/products'
import type { ProductVariant } from '../utils/products'
import type { CartItem } from '../utils/cart'

interface Props {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void
}

export default function ProductPage({ onAddToCart }: Props) {
  const product = HONEY_PRODUCT
  const defaultVariant = product.variants.find((v) => v.available) ?? product.variants[1]
  const [selected, setSelected] = useState<ProductVariant>(defaultVariant)
  const [addedFeedback, setAddedFeedback] = useState(false)

  function handleAdd() {
    if (!selected.available) return
    onAddToCart({
      id: selected.id,
      name: `${product.name} – ${selected.weight}`,
      weight: selected.weight,
      priceUnit: selected.priceUnit,
      pricePerKg: selected.pricePerKg,
      image: product.image,
    })
    setAddedFeedback(true)
    setTimeout(() => setAddedFeedback(false), 2000)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Product image */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="flex items-center justify-center p-8 md:p-12">
            <img
              src="/logo.png"
              alt={`${product.name} – ${product.subtitle}`}
              className="w-full max-w-sm h-auto"
            />
          </div>
        </div>

        {/* Right: Product details */}
        <div className="space-y-6">
          <div>
            <h1 className="font-display text-3xl font-bold text-noir mb-1">
              {product.name}
            </h1>
            <p className="font-display text-lg text-gris italic">
              {product.subtitle}
            </p>
          </div>

          <p className="text-noir-light leading-relaxed">
            {product.description}
          </p>

          {/* Size selector */}
          <div>
            <h3 className="text-sm font-semibold text-noir mb-3 uppercase tracking-wider">
              Choisir votre format
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {product.variants.map((variant) => (
                <VariantCard
                  key={variant.id}
                  variant={variant}
                  isSelected={selected.id === variant.id}
                  onSelect={() => variant.available && setSelected(variant)}
                />
              ))}
            </div>
          </div>

          {/* Dynamic price display */}
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-display font-bold text-noir">
              {selected.priceUnit.toFixed(2)} &euro;
            </span>
            <span className="text-sm text-gris">TTC</span>
            <span className="text-sm text-gris ml-auto">
              {selected.pricePerKg.toFixed(2)} &euro;/kg
            </span>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            disabled={!selected.available}
            className={`w-full font-semibold py-4 rounded transition-all cursor-pointer text-sm uppercase tracking-wider ${
              !selected.available
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : addedFeedback
                  ? 'bg-green-600 text-white'
                  : 'bg-honey text-noir hover:bg-honey-dark'
            }`}
          >
            {!selected.available
              ? 'Épuisé – Bientôt disponible'
              : addedFeedback
                ? 'Ajouté au panier !'
                : `Ajouter au panier — ${selected.priceUnit.toFixed(2)} \u20AC`}
          </button>

          {selected.available && (
            <p className="text-xs text-gris text-center">
              Livraison gratuite dès 50 &euro; d'achat
            </p>
          )}

          {/* Regulatory info */}
          <details className="border border-gray-200 rounded-lg">
            <summary className="px-5 py-3 cursor-pointer text-sm font-semibold text-noir hover:bg-gray-50 transition-colors">
              Informations réglementaires
            </summary>
            <div className="px-5 pb-4">
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                <dt className="text-gris">Dénomination :</dt>
                <dd>{product.name}</dd>
                <dt className="text-gris">Poids net :</dt>
                <dd>{selected.weight}</dd>
                <dt className="text-gris">Origine :</dt>
                <dd>{product.origin}</dd>
                <dt className="text-gris">Prix TTC :</dt>
                <dd>{selected.priceUnit.toFixed(2)} &euro;</dd>
                <dt className="text-gris">Prix au kilo :</dt>
                <dd>{selected.pricePerKg.toFixed(2)} &euro;/kg</dd>
                <dt className="text-gris">DDM :</dt>
                <dd>{product.ddm}</dd>
                <dt className="text-gris">Conservation :</dt>
                <dd>{product.conservation}</dd>
                <dt className="text-gris">Producteur :</dt>
                <dd>{product.producer}</dd>
                <dt className="text-gris">Adresse :</dt>
                <dd>{product.producerAddress}</dd>
                <dt className="text-gris">N&deg; de lot :</dt>
                <dd>{product.lot}</dd>
              </dl>
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}

function VariantCard({
  variant,
  isSelected,
  onSelect,
}: {
  variant: ProductVariant
  isSelected: boolean
  onSelect: () => void
}) {
  const soldOut = !variant.available

  return (
    <button
      onClick={onSelect}
      disabled={soldOut}
      className={`relative rounded-lg border-2 p-3 text-left transition-all cursor-pointer ${
        soldOut
          ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
          : isSelected
            ? 'border-honey bg-amber-50 shadow-sm'
            : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      {/* Badge */}
      {variant.badge && !soldOut && (
        <span
          className={`absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
            variant.badge === 'Meilleur prix'
              ? 'bg-green-600 text-white'
              : 'bg-honey text-noir'
          }`}
        >
          {variant.badge}
        </span>
      )}

      {/* Weight */}
      <p className={`font-display text-lg font-bold ${soldOut ? 'text-gray-400' : 'text-noir'}`}>
        {variant.weight}
      </p>

      {/* Price */}
      <p className={`text-sm font-semibold ${soldOut ? 'text-gray-400' : 'text-noir'}`}>
        {variant.priceUnit.toFixed(2)} &euro;
      </p>

      {/* Price per kg */}
      <p className="text-xs text-gris">
        {variant.pricePerKg.toFixed(2)} &euro;/kg
      </p>

      {/* Savings or sold out */}
      {soldOut ? (
        <p className="text-xs font-semibold text-red-400 mt-1">Épuisé</p>
      ) : variant.savings ? (
        <p className="text-xs font-semibold text-green-600 mt-1">{variant.savings}</p>
      ) : null}
    </button>
  )
}
