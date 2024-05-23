import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    
    <div className="header2">
      <div className="container">
        <div className="left-header2">
        <h3>ADMIN HEADER</h3>
      
        </div>
        <div className="right-header2">
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li>Products</li>
            <li> <Link to="/basket">Basket</Link></li>
            <li> <Link to="/wishlist">Wishlist</Link></li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Special</li>
          </ul>
        </div>
   
      </div>
    </div>
    </>
  
  )
}

export default Header