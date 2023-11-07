import React from 'react'
import { useProductsContext } from '../functionality/ProductsContext'
import { Link } from 'react-router-dom'
import { links } from '../vars/links'
import Error from './Error'
import Loading from './Loading'
import styled from 'styled-components'
import ProductCard from './ProductCard'

export default function BundleProducts() {
  const {
    bestsell_products: bestsell,
    products_error: error,
    products_load: loading,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <BundleContainer className='page'>
      <div className='page-center title'>
        <h1>save on our bundles</h1>
      </div>
      <div className='page-center bestsell'>
        {bestsell.map((product) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </div>
    </BundleContainer>
  )
}

const BundleContainer = styled.section`
  background-color: var(--bundle-color);
  .bestsell {
    margin: 4rem auto;
    display: grid;
    gap: 2rem 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
  }
  .btn-container {
    text-align: center;
  }
  @media (min-width: 576px) {
    .bestsell {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
    .title {
      text-align: left;
    }
  }
`
/* gray color for this? */
