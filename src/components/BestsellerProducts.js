import React from 'react'
import { useProductsContext } from '../functionality/products-context'
import { Link } from 'react-router-dom'
import { links } from '../vars/links'
import Error from './Error'
import Loading from './Loading'
import styled from 'styled-components'
import ProductCard from './ProductCard'

export default function BestsellerProducts() {
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
    <BestSellerContainer className='page'>
      <div className='background-img page-center'></div>
      <div className='page-center title'>
        <h1>Our Best Sellers</h1>
      </div>
      <div className='page-center bestsell'>
        {bestsell.map((product) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </div>
      <div className='btn-container'>
        <Link to={links[2].url} className='btn'>
          all products
        </Link>
      </div>
    </BestSellerContainer>
  )
}

const BestSellerContainer = styled.section`
  background-color: var(--bundle-color);
  .bestsell {
    justify-content: center;
    align-items: center;
    margin: 4rem auto;
    display: grid;
    img {
      height: 250px;
    }
  }
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
  }
  .btn-container {
    text-align: center;
  }
  @media (min-width: 1024px) {
    .bestsell {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
    .title {
      text-align: left;
    }
  }
`
/* gray color for this? */
