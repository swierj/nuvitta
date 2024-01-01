require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('build'))

const stripe = require('stripe')(process.env.STRIPE_SK)

const DOMAIN = 'http://localhost:3000'

// add try catch
app.post('/create-checkout-session', async (req, res) => {
  console.log('got inside')
  const items = req.body.items
  console.log(items)
  let lineItems = []
  items.forEach((item) => {
    console.log(item.price_id)
    lineItems.push({
      price_data: {
        currency: 'usd',
        unit_amount: item.price,
        product_data: {
          name: item.name,
        },
      },
      quantity: item.amount,
    })
  })
  console.log('line items ******')
  console.log(lineItems)
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: lineItems,
    mode: 'payment',
    return_url: `${DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  })

  res.send({ clientSecret: session.client_secret })
})

app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id)

  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
  })
})

console.log('test')

app.listen(3000)
