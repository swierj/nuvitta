import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../functionality/CartContext'
import { formatPrice } from '../vars/helper'
import { Link } from 'react-router-dom'

export default function CartCheckout() {
  const { total_amount, shipping, cart } = useCartContext()
  return (
    <CartCheckoutContainer>
      <article>
        <div className='grid'>
          <p>
            subtotal <span>({cart.length} items)</span>
          </p>
          <p>{formatPrice(total_amount)}</p>
        </div>
        <div className='grid'>
          <p>shipping</p>
          <p>{formatPrice(shipping)}</p>
        </div>
        <div className='grid'>
          <p>estimated tax</p>
          <p>calculated at checkout</p>
        </div>
        <div className='total-amount grid'>
          <p>estimated total</p>
          <p>{formatPrice(total_amount + shipping)}</p>
        </div>
      </article>
      <Link className='btn'>checkout</Link>
    </CartCheckoutContainer>
  )
}

const CartCheckoutContainer = styled.section`
  p {
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--heading-color);
    line-height: 1;
  }
  span {
    text-transform: lowercase;
  }
  .grid {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .total-amount {
    margin: 2rem 0;
    p {
      font-size: 1.5rem;
      color: black;
    }
  }
  .btn {
    width: 100%;
    text-align: center;
    padding: 1rem;
    margin-top: 0.5rem;
    border-radius: 0.25rem;
  }
`
