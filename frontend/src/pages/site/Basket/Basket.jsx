import React, { useContext } from "react";
import "./Basket.css";
import {Helmet} from "react-helmet";
import MainContext from '../../../context/Context';
const Basket = () => {
const {basket,addToBasket,deleteBasket}=useContext(MainContext)
  return (
    <div>
    <Helmet>
        <title>Basket</title>
      </Helmet>
      <table class="table bg-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Count</th>
            <th scope="col">Add</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
      { basket.map((item,index)=>(
        <tr>
            <th scope="row">{index+1}</th>
            <td>{item.title}</td>
            <td><img width="60px" src={item.image} alt="" /></td>
            <td>{item.totalPrice}</td>
            <td>{item.count}</td>
            <td><button className="btn btn-primary" onClick={()=>{
              addToBasket(item._id)
            }}>add</button></td>
            <td><button onClick={()=>{
              deleteBasket(item._id)
            }} className="btn btn-danger">delete</button></td>
          </tr>
       ))}
         
        </tbody>
      </table>
    </div>
  );
};

export default Basket;
