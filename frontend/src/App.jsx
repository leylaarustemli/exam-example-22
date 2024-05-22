import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/routes'
import MainContext from './context/Context';
import axios from 'axios';


function App() {
const Router=createBrowserRouter(ROUTES)
const[data,setData]=useState([])
const[basket,setBasket]=useState([])
const contextData={data,setData,basket,setBasket,addToBasket,deleteBasket}

useEffect(()=>{axios.get("http://localhost:8080/api/products").then(res=>{
  setData([...res.data])
})},[])
function addToBasket(id) {
let basketItem=basket.find(item=>item._id==id)
let target=data.find(item=>item._id==id)
if(basketItem){
  basketItem.count++
basketItem.totalPrice+=basketItem.price
setBasket([...basket])
}
else{
let newBasket={...target,count:1,totalPrice:target.price}
setBasket([...basket,newBasket])
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
