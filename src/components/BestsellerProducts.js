import React from 'react'
import { useProductsContext } from '../functionality/products-context'

export default function BestsellerProducts() {
  const { bestseller: show } = useProductsContext()
  return <div>Our Best Sellers</div>
}
/* gray color for this? */
