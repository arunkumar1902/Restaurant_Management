import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import FoodDetails from './pages/FoodDetails'
import { CartProvider } from './context/CartContext'
import Cart from './pages/Cart'
import NavBar from './components/NavBar'
import NotFound from './pages/NotFound'
import Payment from './pages/Payment'
import OrderSuccess from './pages/OrderSuccess'

export default function App() {
  return (
    <div>
      <BrowserRouter>

        <CartProvider>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/foodDetails/:recipeId' element={<FoodDetails />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/payment' element={<Payment></Payment>}></Route>
            <Route path='/orderSuccess' element={<OrderSuccess></OrderSuccess>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </CartProvider>

      </BrowserRouter>
    </div>
  )
}
