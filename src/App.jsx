import React from 'react'
import Navbar from './components/Navbar'
import AllProducts from './pages/AllProducts'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import ProductsCategory from './pages/ProductsCategory'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import { Toaster } from "react-hot-toast"
import { Route, Routes, useLocation } from 'react-router-dom'
import { useAppContext } from './context/AppContext'

const App = () => {


  const isSellerPath = useLocation().pathname.includes('/seller')
  const { showUserLogin } = useAppContext()
  return (
    <div>

      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}
      <Toaster />
      <div className={`${isSellerPath ? '' : 'px-6 md:px-16 lg:px-24 xl:px-32'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductsCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      {!isSellerPath && <Footer />}

    </div>
  )
}

export default App