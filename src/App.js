import React from 'react'

import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Login from "../src/pages/Login"
import Register from './pages/Register'
import Cart from './pages/Cart'
import {Route,Routes, useNavigate} from "react-router-dom"




const App = () => {
  
  const user = true;
  const navigate = useNavigate();
  return (
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/register" element={<Register/>}/>
      
    </Routes>
   
  )
}

export default App
