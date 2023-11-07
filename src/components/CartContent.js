import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../functionality/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import CartCheckout from './CartCheckout'

export default function CartContent() {
  const { cart, clearCart } = useCartContext()
  return (
    <CartContainer className='page page-center'>
      <section>
        <h3 className='title'>shopping cart</h3>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </section>
      <section className='order-summary'>
        <h3 className='title'>Order Summary</h3>
        <CartCheckout />
      </section>
    </CartContainer>
  )
}

const CartContainer = styled.section`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 8rem;
  .title {
    font-size: 2rem;
    font-weight: 600;
    text-align: left;
    margin-bottom: 2rem;
  }
`
