import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer1'>
<div className="container">
  <div className="about">
    <h4>ABOUT USs</h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, enim! Soluta ea eaque placeat nam.</p>
  </div>
  <div className="links">
    <h4>QUICK LINKS</h4>
    <p>About Us</p>
    <p>Services</p>
    <p>Testimonials</p>
    <p>Contact Us</p>
  </div>
  <div className="follow">
    <h4>FOLLOW US</h4>
    <div className="icns">
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-linkedin"></i>
    </div>
   
  </div>
  <div className="product">
    <h4>FEATURED PRODUCTS</h4>
    <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />
    <p>Leather Brown Shoe</p>
    <span>$60.00</span>
    <h5>Add to cart</h5>
  </div>
</div>
    </div>
  )
}

export default Footer