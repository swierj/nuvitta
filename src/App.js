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

export default function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div className='page-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<SingleProduct />} />
          <Route
            path='checkout'
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
