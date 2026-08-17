import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import FoodDetails from './pages/FoodDetails'
import { CartProvider } from './context/CartContext'
import Cart from './pages/Cart'

export default function App() {
  return (
    <div>
      <BrowserRouter>

        <CartProvider>
          <Routes>
            <Route path='/' element={<Navigate to='/login' replace />}></Route>

            <Route element={<Layout />}>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/menu' element={<Menu />}></Route>
              <Route path='/foodDetails/:recipeId' element={<FoodDetails />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
            </Route>

            <Route path='/login' element={<Login></Login>}></Route>
          </Routes>
        </CartProvider>

      </BrowserRouter>
    </div>
  )
}
