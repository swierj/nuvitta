import React from 'react'
import GridView from './GridView'
import { useProductsContext } from '../functionality/products-context'

export default function ProductList() {
  const { products: products } = useProductsContext()
  return <GridView products={products} />
}
