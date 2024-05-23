import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter, json } from 'react-router-dom'
import ROUTES from './routes/routes'
import MainContext from './context/Context';
import axios from 'axios';


function App() {
const Router=createBrowserRouter(ROUTES)
const[data,setData]=useState([])
const[basket,setBasket]=useState(localStorage.getItem("bask")?JSON.parse(localStorage.getItem("bask")):[])
const[wishList,setWishList]=useState([])
const contextData={data,setData,basket,setBasket,addToBasket,deleteBasket,wishList,setWishList,addToWish,deleteWishList}

useEffect(()=>{axios.get("http://localhost:8080/api/products").then(res=>{
  setData([...res.data])
})},[])


function addToWish(favorites){
  const target=wishList.find((item)=>item._id==favorites._id)
  if(target){
    alert("Artiq var wishlistde")
  }
  else{
    setWishList([...wishList,favorites])
    alert("wishliste elave olundu")
  }
}
function deleteWishList(product){
  const target=wishList.find((item)=>item._id==product._id)
  wishList.splice(wishList.indexOf(target),1)
  setWishList([...wishList])
}
function addToBasket(id) {
let basketItem=basket.find(item=>item._id==id)
let target=data.find(item=>item._id==id)
if(basketItem){
  basketItem.count++
basketItem.totalPrice+=basketItem.price
setBasket([...basket])
localStorage.setItem("bask",JSON.stringify([...basket]))
}
else{
let newBasket={...target,count:1,totalPrice:target.price}
setBasket([...basket,newBasket])
localStorage.setItem("bask".JSON.stringify([...basket,newBasket]))
}
}

function deleteBasket(id) {
  let target=basket.find((x)=>x._id==id);
  if(target.count>1){
    target.count--
    target.totalPrice=target.price*target.count;
    setBasket([...basket])
  }
  else{
   
    setBasket([...basket.filter(x=>x._id!=id)])
  }
}
  return (
    <MainContext.Provider value={contextData}>
<RouterProvider router={Router}/>
    </MainContext.Provider>
  )
}

export default App
