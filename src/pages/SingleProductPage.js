import React, { useEffect } from 'react'
import { useParams, useHistory, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../functionality/products-context'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Loading, Error, ProductInfo, ProductImages } from '../components'

export default function SingleProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    s_product_load: loading,
    s_product_error: error,
    products: products,
  } = useProductsContext()

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
    // eslint-disable-next-line
  }, [error])
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  const product = products[id - 1]

  return (
    <SingleProductContainer>
      <div className='page page-center'>
        <Link to='../nuvitta/products' className='btn'>
          back to products
        </Link>
        <div className='section-split'>
          <ProductImages {...product} />
          <ProductInfo {...product} />
        </div>
      </div>
    </SingleProductContainer>
  )
}

const SingleProductContainer = styled.section`
  margin-top: 2rem;
  .section-split {
    display: grid;
    gap: 2rem;
    margin-top: 3rem;
  }
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
  }
  @media (min-width: 1024px) {
    .section-split {
      grid-template-columns: 1fr 1.5fr;
    }
  }
`
