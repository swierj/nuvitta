import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { SidebarProvider } from './functionality/sidebar-context'
import { ProductsProvider } from './functionality/products-context'

const container = document.getElementById('root')
createRoot(container).render(
  <SidebarProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </SidebarProvider>
)
