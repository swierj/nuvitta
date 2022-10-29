import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import { product_data as data } from '../vars/links'

const initialState = {}

const ProductsContext = React.createContext()

const ACTIONS = {
  PRODUCTS_BEGIN: 'PRODUCTS_BEGIN',
  PRODUCTS_SUCCESS: 'PRODUCTS_SUCCESS',
  PRODUCTS_ERROR: 'PRODUCTS_ERROR',
  S_PRODUCT_BEGIN: 'S_PRODUCT_BEGIN',
  S_PRODUCT_SUCCESS: 'S_PRODUCT_SUCCESS',
  S_PRODUCT_ERROR: 'S_PRODUCT_ERROR',
}

/* try with switch otherwise switch to the if/else statements */
const reducer = (state, action) => {}

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProducts = async (data) => {
    const response = await axios.get(data)
    console.log(response)
  }

  useEffect(() => {
    fetchProducts(data)
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
