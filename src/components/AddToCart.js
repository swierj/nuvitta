import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ProductAmount from './ProductAmount'

export default function AddToCart() {
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((oldAmount) => {
      let temp = oldAmount + 1
      return temp
    })
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let temp = oldAmount - 1
      return temp
    })
  }
  return (
    <CartContainer>
      <div>
        <ProductAmount
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <Link to='../nuvitta/cart' className='btn'>
          add to cart
        </Link>
      </div>
    </CartContainer>
  )
}

const CartContainer = styled.section``
