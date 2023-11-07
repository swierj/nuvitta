import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../functionality/CartContext'
import { Link } from 'react-router-dom'
import { CartCheckout, CartContent } from '../components'

export default function CartPage() {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <CartPageContainer className='page page-center'>
        <div className='empty-cart'>
          <h2>Your cart is empty</h2>
          <Link to='../nuvitta/products' className='btn'>
            continue shopping
          </Link>
        </div>
      </CartPageContainer>
    )
  }
  return (
    <main>
      <CartPageContainer className='page page-center'>
        <CartContent></CartContent>
      </CartPageContainer>
    </main>
  )
}
const CartPageContainer = styled.section``
