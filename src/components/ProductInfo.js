import React from 'react'
import styled from 'styled-components'
import formatPrice from '../vars/helper'
import AddToCart from './AddToCart'

export default function ProductInfo({
  name,
  price,
  prodDesc,
  prodDirec,
  prodIngr,
}) {
  return (
    <ProductInfoContainer>
      <div className='center'>
        <h1 className='title'>{name}</h1>
        <h2 className='price'>{formatPrice(price)}</h2>
        <p>{prodDesc}</p>
        <h3>directions</h3>
        <p>{prodDirec}</p>
        <h3>ingredients</h3>
        <p>{prodIngr}</p>
        <div className='cart-section'>
          <AddToCart />
        </div>
      </div>
    </ProductInfoContainer>
  )
}

const ProductInfoContainer = styled.section`
  h1 {
    font-weight: 600;
  }
  p {
    margin-bottom: 2rem;
  }
  .title {
    margin-bottom: 1rem;
  }
  .cart-section {
    display: grid;
    gap: 1rem;
  }
  .price {
    color: var(--brand-color);
    margin-bottom: 2rem;
  }
  @media (min-width: 1024px) {
    .center {
    }
    .title {
      text-align: left;
    }
  }
`
