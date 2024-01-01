import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useCartContext } from '../functionality/CartContext'
import { loadStripe } from '@stripe/stripe-js'
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js'

const stripePromise = loadStripe(
  'pk_test_51O9kPgFBqgWEiPKzbb372TDagAccuSbOxROHAnP0KvQV6vcPRTvsHUxUqR3ln4poukzo5yDG0lFbzQcJJzblI2j900g5dCjQlG'
)

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState('')

  const { cart } = useCartContext()

  useEffect(() => {
    fetch('/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // pass cart items to backend
      body: JSON.stringify({ items: cart }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  return (
    <main>
      <CheckoutPageContainer>
        {clientSecret && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout className='embed' />
          </EmbeddedCheckoutProvider>
        )}
      </CheckoutPageContainer>
    </main>
  )
}

const CheckoutPageContainer = styled.section`
  .embed {
    margin: 2rem 0rem;
  }
`
