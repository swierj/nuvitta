import React from 'react'
import styled from 'styled-components'
import { ProductList } from '../components'
/* add a shop products green section below navbar */

export default function ProductPage() {
  return (
    <main>
      <ProductsContainer className='page page-center'>
        <div className='products'>
          <ProductList />
        </div>
      </ProductsContainer>
    </main>
  )
}

const ProductsContainer = styled.section`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 800px) {
    .products {
      grid-template-columns: 60% 1fr;
    }
  }
`
