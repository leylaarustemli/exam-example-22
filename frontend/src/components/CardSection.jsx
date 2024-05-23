import React, { useState } from 'react'
import "./CardsSection.css"
import { useContext } from 'react'
import MainContext from '../context/Context'
import { Link } from 'react-router-dom'
const CardSection = () => {
    const{addToBasket,data,addToWish}=useContext(MainContext)
    const[inpVal,setInpVal]=useState("")
    const [sortBy, setSortBy] = useState(null);
  return (
    <div className='cardsection'>
<div className="container">
    <span>POPULAR PRODUCTS</span>
    <h3>Our Products</h3>
    <input type="text" placeholder='Search'  value={inpVal} onChange={(e)=>{
      setInpVal(e.target.value)
    }}/>
    <div className="price">
          <button onClick={() => setSortBy({ field: "title", asc: true })}>
            A-Z
          </button>
          <button onClick={() => setSortBy({ field: "title", asc: false })}>
            Z-A
          </button>
          <button onClick={() => setSortBy({ field: "price", asc: true })}>Hign Price</button>
          <button onClick={() => setSortBy({ field: "price", asc: false })}>Low Price</button>
          <button onClick={() => setSortBy(null)}>Default</button>
        </div>
    <div className="cards">
    
      {data .filter((x) => x.title.toLowerCase().includes(inpVal.toLowerCase()))
        .sort((a, b) => {
              if (!sortBy) {
                return 0;
              } else if (sortBy.asc == true) {
                return a[sortBy.field] > b[sortBy.field]
                  ? 1
                  : b[sortBy.field] > a[sortBy.field]
                  ? -1
                  : 0;
              } else if (sortBy.asc == false) {
                return a[sortBy.field] < b[sortBy.field]
                  ? 1
                  : b[sortBy.field] < a[sortBy.field]
                  ? -1
                  : 0;
              }
            })
      .map((item,index)=>(
          <div key={index} className="card">
          <img width="300px" height="350px" src={item.image} alt="" />
          <p>{item.title}</p>
          <div className="like">
          <i  onClick={()=>{
            addToWish(item)
          }} class="fa-solid fa-heart"></i>
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