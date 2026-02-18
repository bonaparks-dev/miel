export interface CartItem {
  id: string
  name: string
  weight: string
  priceUnit: number
  pricePerKg: number
  quantity: number
  image: string
}

const CART_KEY = 'miel-jeurre-cart'

export function getCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveCart(items: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export function addToCart(item: Omit<CartItem, 'quantity'>, qty = 1): CartItem[] {
  const cart = getCart()
  const existing = cart.find((c) => c.id === item.id)
  if (existing) {
    existing.quantity += qty
  } else {
    cart.push({ ...item, quantity: qty })
  }
  saveCart(cart)
  return cart
}

export function updateQuantity(id: string, quantity: number): CartItem[] {
  let cart = getCart()
  if (quantity <= 0) {
    cart = cart.filter((c) => c.id !== id)
  } else {
    const item = cart.find((c) => c.id === id)
    if (item) item.quantity = quantity
  }
  saveCart(cart)
  return cart
}

export function clearCart(): void {
  localStorage.removeItem(CART_KEY)
}

export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.priceUnit * item.quantity, 0)
}
