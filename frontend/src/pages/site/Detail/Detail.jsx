import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Detail.css";
import {Helmet} from "react-helmet";
const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`).then((res) => {
      setDetail(res.data);
    });
  }, [id]);
  return (
    <div className="detailpage">
      <Helmet>
        <title>DDetail</title>
      </Helmet>
      <div className="container">
        <div className="left-detail">
          <img width="300px" height="250px" src={detail.image} alt="" />
        </div>
        <div className="right-detail">
          <h2>{detail.title}</h2>
          <span>{detail.price}AZN</span>
          <p>{detail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
