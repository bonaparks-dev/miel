// Server-side Stripe Checkout Session creation.
// Deploy this as a serverless function (Netlify Functions, Vercel API Routes, etc.)
//
// Example for Netlify Functions: move to netlify/functions/create-checkout-session.ts
// Example for Vercel: move to api/create-checkout-session.ts
//
// Required env var: STRIPE_SECRET_KEY

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-18.acacia',
})

interface RequestBody {
  items: Array<{
    name: string
    unitAmount: number
    quantity: number
  }>
  shipping: number
  customerEmail: string
  shippingAddress: {
    firstName: string
    lastName: string
    address: string
    city: string
    postalCode: string
    phone: string
  }
  successUrl: string
  cancelUrl: string
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const body: RequestBody = await req.json()

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = body.items.map(
    (item) => ({
      price_data: {
        currency: 'eur',
        product_data: { name: item.name },
        unit_amount: item.unitAmount,
      },
      quantity: item.quantity,
    })
  )

  if (body.shipping > 0) {
    lineItems.push({
      price_data: {
        currency: 'eur',
        product_data: { name: 'Livraison France métropolitaine' },
        unit_amount: body.shipping,
      },
      quantity: 1,
    })
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    customer_email: body.customerEmail,
    success_url: body.successUrl,
    cancel_url: body.cancelUrl,
    metadata: {
      customerName: `${body.shippingAddress.firstName} ${body.shippingAddress.lastName}`,
      shippingAddress: `${body.shippingAddress.address}, ${body.shippingAddress.postalCode} ${body.shippingAddress.city}`,
      phone: body.shippingAddress.phone,
    },
  })

  return new Response(JSON.stringify({ url: session.url }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
