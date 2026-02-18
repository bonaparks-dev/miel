export interface Product {
  id: string
  name: string
  subtitle: string
  weight: string
  weightGrams: number
  priceUnit: number
  pricePerKg: number
  origin: string
  ddm: string
  conservation: string
  producer: string
  producerAddress: string
  lot: string
  description: string
  image: string
}

export const HONEY_PRODUCT: Product = {
  id: 'miel-fleurs-500g',
  name: 'Miel de Fleurs',
  subtitle: 'Château de Jeurre',
  weight: '500 g',
  weightGrams: 500,
  priceUnit: 12,
  pricePerKg: 24,
  origin: 'France',
  ddm: 'Voir sur le pot (DDM)',
  conservation: "Conserver à température ambiante, à l'abri de la lumière et de l'humidité. Ne pas réfrigérer.",
  producer: 'SARL Château de Jeurre',
  producerAddress: 'Château de Jeurre, 91590 Morigny-Champigny, France',
  lot: 'Voir sur le pot',
  description: "Miel de fleurs récolté artisanalement dans les jardins du Château de Jeurre. Récolté à froid, non chauffé, non filtré. Un miel aux arômes délicats de fleurs sauvages, reflet fidèle du terroir de l'Essonne.",
  image: '/logo.png',
}

export const SHIPPING_COST = 5.90
export const FREE_SHIPPING_THRESHOLD = 50
