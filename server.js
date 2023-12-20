// This is your test secret API key.
require('dotenv').config()
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public'))

const DOMAIN = 'http://localhost:3000'

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${DOMAIN}?success=true`,
    cancel_url: `${DOMAIN}?canceled=true`,
  })

  res.redirect(303, session.url)
})

app.listen(3000, () => console.log('Running on port 3000'))
