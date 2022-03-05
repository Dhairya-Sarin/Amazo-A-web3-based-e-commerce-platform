import {Card, Rate} from 'antd';
import { Link } from 'react-router-dom';
import "./Results.css";
import {items} from "../items.js";


export default function Results({category,rating , priceMin , priceMax})
{
    const itemCategory = items[category].filter(x => x.rating >= rating).filter(x => x.price > priceMin).filter(x => x.price <= priceMax);
    console.log(itemCategory);
    return (
        <>
  {itemCategory.map((e,i) => {
    return (
      <Card>
      <div style={{ display: "flex" }}>
        <img src={e.image} alt={i} width="300px"></img>
        <div>
          <h1 className="title">
            {e.name}</h1> 
          
          <Rate value={e.rating} disabled={true}></Rate>
          <h2> Rs.{e.price}</h2>
          <p>
            In stock
          </p>
          <Link to="/product" state={e} className="login">
          Go to Product Page
        </Link>
        </div>
      </div>
    </Card>
    );
  })}
  </>
    );
}