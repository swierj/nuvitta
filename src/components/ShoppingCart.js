import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSidebarContext } from '../functionality/sidebar-context'

export default function ShoppingCart() {
  const { closeSidebar } = useSidebarContext()
  return (
    <CartContainer className='shopping-cart'>
      <Link to='../nuvitta/cart' onClick={closeSidebar}>
        <div className='cart-icon'>
          <FaShoppingCart />
        </div>
      </Link>
    </CartContainer>
  )
}

const CartContainer = styled.div`
  .cart-icon {
    color: var(--heading-color);
    display: flex;
    align-items: center;
    svg {
      font-size: 2.5rem;
    }
  }
`
