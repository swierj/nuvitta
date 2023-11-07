import React from 'react'
import styled from 'styled-components'
import { StripeCheckout } from '../components'
import { useCartContext } from '../functionality/CartContext'
import { Link } from 'react-router-dom'

export default function CheckoutPage() {
  const { cart } = useCartContext()

  return (
    <main>
      <CheckoutPageContainer>
        <StripeCheckout />
      </CheckoutPageContainer>
    </main>
  )
}

const CheckoutPageContainer = styled.section``
