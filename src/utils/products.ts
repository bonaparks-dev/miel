export interface ProductVariant {
  id: string
  weight: string
  weightGrams: number
  priceUnit: number
  pricePerKg: number
  available: boolean
  badge?: string
  savings?: string
}

export interface Product {
  name: string
  subtitle: string
  origin: string
  ddm: string
  conservation: string
  producer: string
  producerAddress: string
  lot: string
  description: string
  image: string
  variants: ProductVariant[]
}

export const HONEY_PRODUCT: Product = {
  name: 'Miel de Fleurs',
  subtitle: 'Château de Jeurre',
  origin: 'France',
  ddm: 'Voir sur le pot (DDM)',
  conservation: "Conserver à température ambiante, à l'abri de la lumière et de l'humidité. Ne pas réfrigérer.",
  producer: 'SARL Château de Jeurre',
  producerAddress: 'Château de Jeurre, 91590 Morigny-Champigny, France',
  lot: 'Voir sur le pot',
  description: "Miel de fleurs récolté artisanalement dans les jardins du Château de Jeurre. Récolté à froid, non chauffé, non filtré. Un miel aux arômes délicats de fleurs sauvages, reflet fidèle du terroir de l'Essonne.",
  image: '/logo.png',
  variants: [
    {
      id: 'miel-fleurs-250g',
      weight: '250 g',
      weightGrams: 250,
      priceUnit: 7,
      pricePerKg: 28,
      available: false,
    },
    {
      id: 'miel-fleurs-500g',
      weight: '500 g',
      weightGrams: 500,
      priceUnit: 12,
      pricePerKg: 24,
      available: true,
      badge: 'Populaire',
      savings: '-14% /kg',
    },
    {
      id: 'miel-fleurs-1kg',
      weight: '1 kg',
      weightGrams: 1000,
      priceUnit: 22,
      pricePerKg: 22,
      available: true,
      badge: 'Meilleur prix',
      savings: '-21% /kg',
    },
  ],
}

export const SHIPPING_COST = 5.90
export const FREE_SHIPPING_THRESHOLD = 50
