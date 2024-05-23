import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div className='header1'>
<div className="container">
  <div className="left-header1">
  <i class="fa-brands fa-facebook"></i>
  <i class="fa-brands fa-twitter"></i>
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-linkedin"></i>
  </div>
  <div className="right-header1">
    <p><i class="fa-solid fa-phone"></i>(+1) 234 5678 9101</p>
    <p><i class="fa-solid fa-envelope"></i>shop@yourdumain.com</p>
  </div>
</div>
    </div>
    <div className="header2">
      <div className="container">
        <div className="left-header2">
        <h3>Selling</h3>
        <span>.</span>
        </div>
        <div className="right-header2">
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li>Products</li>
            <li> <Link to="/basket">Basket</Link></li>
            <li> <Link to="/wishlist">Wishlist</Link></li>
            <li> <Link to="/admin/add">Add</Link></li>
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