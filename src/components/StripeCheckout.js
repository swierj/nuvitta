import React from 'react'
import styled from 'styled-components'

const CheckoutForm = () => {
  return <h2>Stripe checkout</h2>
}

export const StripeCheckout = () => {
  return (
    <StripeContainer>
      <CheckoutForm />
    </StripeContainer>
  )
}

const StripeContainer = styled.section``
