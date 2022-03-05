import React from 'react';
import { Rate } from 'antd';
import "./Product.css"
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import Purchase from '../components/Purchase';


const Product = () => {
  
  let{state : item} = useLocation();
  return (
  <>
  <>
  <div className="container">
    <Header />
    <div className="product-content">
      <div>
        <div className="product-img">
          <img src={item.image} alt="product" width="100%"></img>
        </div>
        <p style={{ textAlign: "center" }}>Hover over image to zoom</p>
      </div>
      <div className="product-details">
        <h1>{item.name}</h1>
        <Rate value={item.rating} disabled={true}></Rate>
        <hr></hr>
        <p>
          Price:
          <span className="price"> Rs.{item.price}</span>
        </p>
        <p>
          No Import Fees & Free Shipping Included
        </p>
        <hr></hr>
        <h3>About This Item</h3>
        <p>
          {item.about}
        </p>
      </div>
      <div className="purchase-details">
      <Purchase item={item}/>
      </div>
    </div>
  </div>
  </>
  </>
)
}

export default Product;
