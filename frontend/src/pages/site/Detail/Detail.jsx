import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams } from 'react-router-dom';

const Detail = () => {
  const[detail,setDetail]=useState({})
  const{id}=useParams()
  useEffect(()=>{axios.get(`http://localhost:8080/api/products/${id}`).then(res=>{
    setDetail(res.data)
  })},[id])
  return (
    <div className='detailpage'>
<div className="container">
  <div className="left-detail">
    <img src={detail.image} alt="" />
  </div>
  <div className="right-detail">
    <h2>{detail.title}</h2>
    <span>{detail.price}</span>
    <p>{detail.category}</p>
  </div>
</div>
    </div>
  )
}

export default Detail