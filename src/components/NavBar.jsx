import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/NavBar.css'
import { useCart } from '../context/CartContext';

export default function NavBar() {
     const { cartCount } = useCart();
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h3>FoodieHub</h3>
            </div >
            
            <div className='navbar-links'>
                <NavLink className={({ isActive }) => { return (isActive ? "active" : "inActive") }} to='/home'>Home </NavLink>
                <NavLink className={({ isActive }) => { return (isActive ? "active" : "inActive") }} to='/menu'>Menu</NavLink>
                <NavLink className={({ isActive }) => { return (isActive ? "active" : "inActive") }} to='/about'>About</NavLink>
                <NavLink className={({ isActive }) => { return (isActive ? "active" : "inActive") }} to='/contact'>Contact</NavLink>
            </div>

            <div className="navbar-actions">
                <Link to='/cart' className="cart-btn">Cart ({cartCount})</Link>
            </div>
        </nav>
    )
}
