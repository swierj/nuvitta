import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useCartContext } from '../functionality/CartContext'
import { formatPrice } from '../vars/helper'
import { loadStripe } from '@stripe/stripe-js'
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js'
import axios from 'axios'
import { useHistory, Navigate } from 'react-router-dom'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    fetch('/create-checkout-session', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  return (
    <div id='checkout'>
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}

const Return = () => {
  const [status, setStatus] = useState(null)
  const [customerEmail, setCustomerEmail] = useState('')

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const sessionId = urlParams.get('session_id')

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status)
        setCustomerEmail(data.customer_email)
      })
  }, [])

  if (status === 'open') {
    return <Navigate to='/checkout' />
  }

  if (status === 'complete') {
    return (
      <section id='success'>
        <p>
          We appreciate your business! A confirmation email will be sent to{' '}
          {customerEmail}. If you have any questions, please email{' '}
          <a href='mailto:orders@example.com'>orders@example.com</a>.
        </p>
      </section>
    )
  }

  return null
}

export default function StripeCheckout() {
  return (
    <StripeContainer>
      <CheckoutForm />
      <Return />
    </StripeContainer>
  )
}

const StripeContainer = styled.section``
