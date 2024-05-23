import React, { useContext, useState } from 'react'
import {Helmet} from "react-helmet";
import MainContext from '../../../context/Context';

const WishList = () => {
  const {addToWish,deleteWishList,wishList}=useContext(MainContext)
  return (
    <div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Delete</th>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>

    </tr>
  </thead>
  <tbody>
{wishList.map((item,index)=>(
  <tr>
      <th scope="row">{index+1}</th>
      <td><i onClick={()=>{
        deleteWishList(item)
      }} class="fa-solid fa-trash"></i></td>
      <td><img width="80px" src={item.image} alt="" /></td>
      <td>{item.title}</td>
      <td>{item.price}</td>
     
    </tr>
))}
 
  </tbody>
</table>
    </div>
  )
}

export default WishList