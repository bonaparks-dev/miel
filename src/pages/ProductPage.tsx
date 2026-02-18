import ProductLabelCard from '../components/ProductLabelCard'
import { HONEY_PRODUCT } from '../utils/products'
import type { CartItem } from '../utils/cart'

interface Props {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void
}

export default function ProductPage({ onAddToCart }: Props) {
  function handleAdd() {
    onAddToCart({
      id: HONEY_PRODUCT.id,
      name: HONEY_PRODUCT.name,
      weight: HONEY_PRODUCT.weight,
      priceUnit: HONEY_PRODUCT.priceUnit,
      pricePerKg: HONEY_PRODUCT.pricePerKg,
      image: HONEY_PRODUCT.image,
    })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Product Card */}
        <ProductLabelCard product={HONEY_PRODUCT} onAddToCart={handleAdd} />

        {/* Right: Description */}
        <div className="space-y-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-noir mb-2">
              {HONEY_PRODUCT.name}
            </h1>
            <p className="font-display text-lg text-gris italic">
              {HONEY_PRODUCT.subtitle}
            </p>
          </div>

          <p className="text-noir-light leading-relaxed">
            {HONEY_PRODUCT.description}
          </p>

          <div className="bg-ivory-dark rounded-lg p-6 space-y-3">
            <h3 className="font-display text-lg font-semibold text-noir">
              Informations reglementaires
            </h3>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
              <dt className="text-gris">Denomination :</dt>
              <dd>{HONEY_PRODUCT.name}</dd>
              <dt className="text-gris">Poids net :</dt>
              <dd>{HONEY_PRODUCT.weight}</dd>
              <dt className="text-gris">Origine :</dt>
              <dd>{HONEY_PRODUCT.origin}</dd>
              <dt className="text-gris">Prix TTC :</dt>
              <dd>{HONEY_PRODUCT.priceUnit.toFixed(2)} &euro;</dd>
              <dt className="text-gris">Prix au kilo :</dt>
              <dd>{HONEY_PRODUCT.pricePerKg.toFixed(2)} &euro;/kg</dd>
              <dt className="text-gris">DDM :</dt>
              <dd>{HONEY_PRODUCT.ddm}</dd>
              <dt className="text-gris">Conservation :</dt>
              <dd>{HONEY_PRODUCT.conservation}</dd>
              <dt className="text-gris">Producteur :</dt>
              <dd>{HONEY_PRODUCT.producer}</dd>
              <dt className="text-gris">Adresse :</dt>
              <dd>{HONEY_PRODUCT.producerAddress}</dd>
              <dt className="text-gris">N&deg; de lot :</dt>
              <dd>{HONEY_PRODUCT.lot}</dd>
            </dl>
          </div>

          <button
            onClick={handleAdd}
            className="w-full lg:w-auto bg-honey text-noir font-semibold px-8 py-3 rounded hover:bg-honey-dark transition-colors cursor-pointer text-sm uppercase tracking-wider"
          >
            Ajouter au panier &mdash; {HONEY_PRODUCT.priceUnit.toFixed(2)} &euro;
          </button>
        </div>
      </div>
    </div>
  )
}
