import React from 'react'
import "./CardsSection.css"
import { useContext } from 'react'
import MainContext from '../context/Context'
import { Link } from 'react-router-dom'
const CardSection = () => {
    const{addToBasket,data}=useContext(MainContext)
  return (
    <div className='cardsection'>
<div className="container">
    <span>POPULAR PRODUCTS</span>
    <h3>Our Products</h3>
    
    <div className="cards">
      {data.map((item,index)=>(
          <div key={index} className="card">
          <img width="300px" height="350px" src={item.image} alt="" />
          <p>{item.title}</p>
          <div className="like">
          <i class="fa-solid fa-heart"></i>
          <p>${item.price}</p>
          </div>
          <span>{item.description}</span>
          <div className="buttons">
              <button onClick={()=>{
                  addToBasket(item._id)
              }} className='basket'>Add to basket</button>
              <Link to={`/detail/${item._id}`}className='details'>Details</Link>
          </div>
      </div>
      ))}

    </div>
</div>
    </div>
  )
}

export default CardSection