import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import { product_data as data } from '../vars/links'

const initialState = {
  products_load: false,
  products_error: false,
  products: [],
  bestsell_products: [],
}

const ProductsContext = React.createContext()

const ACTIONS = {
  PRODUCTS_BEGIN: 'PRODUCTS_BEGIN',
  PRODUCTS_SUCCESS: 'PRODUCTS_SUCCESS',
  PRODUCTS_ERROR: 'PRODUCTS_ERROR',
  /* single product page actions */
  S_PRODUCT_BEGIN: 'S_PRODUCT_BEGIN',
  S_PRODUCT_SUCCESS: 'S_PRODUCT_SUCCESS',
  S_PRODUCT_ERROR: 'S_PRODUCT_ERROR',
}

/* try with switch otherwise switch to the if/else statements */
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.PRODUCTS_BEGIN:
      return { ...state, products_load: true }
    case ACTIONS.PRODUCTS_SUCCESS:
      const bestsell_products = action.payload.filter(
        (product) => product.bestsell === true
      )
      return {
        ...state,
        products_load: false,
        products: action.payload,
        bestsell_products,
      }
    case ACTIONS.PRODUCTS_ERROR:
      return { ...state, products_load: false, products_error: true }
  }
}

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProducts = async (data) => {
    dispatch({ type: ACTIONS.PRODUCTS_BEGIN })
    try {
      const response = await axios.get(data)
      const products = response.data
      dispatch({ type: ACTIONS.PRODUCTS_SUCCESS, payload: products })
    } catch (error) {
      dispatch({ type: ACTIONS.PRODUCTS_ERROR })
    }
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
