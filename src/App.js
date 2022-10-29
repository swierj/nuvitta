import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* component imports */
import { Navbar, Sidebar, Footer } from './components'

/* pages imports */
import {
  Home,
  SingleProduct,
  Cart,
  About,
  Products,
  PrivateRoute,
  Error,
  Checkout,
} from './pages'

/* once i actually deploy the full site remember to change the homepage thing to actual domain */
export default function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div className='page-content'>
        <Routes>
          <Route path='/nuvitta/' element={<Home />} />
          <Route path='/nuvitta/about' element={<About />} />
          <Route path='/nuvitta/cart' element={<Cart />} />
          <Route path='/nuvitta/products' element={<Products />} />
          <Route path='/nuvitta/products/:id' element={<SingleProduct />} />
          <Route
            path='/nuvitta/checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
