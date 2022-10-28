import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import productData from '../assets/product-data.json'

const initialState = {}

const ProductsContext = React.createContext()

/* const ACTIONS = {
  
} */

/* try with switch otherwise switch to the if/else statements */
const reducer = (state, action) => {}

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProducts = async (productData) => {
    const response = await axios.get(productData)
    console.log(response)
  }

  useEffect(() => {
    fetchProducts(productData)
  }, [])

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
