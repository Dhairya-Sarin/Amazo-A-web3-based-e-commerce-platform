import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import {Carousel,Card} from "antd";
import Carousel1 from "../images/carousel1.png";
import Carousel2 from "../images/carousel2.png";
import Games from "../images/games.jpeg";
import Perfumes from "../images/perfumes.jpeg";
import Harddrive from "../images/harddrive.png";
import Iphone from "../images/Iphone.jpeg";
import Macbook from "../images/Macbook.jpeg";
import Airpods from "../images/Airpods.jpeg";
import Watch from "../images/Applewatch.jpeg";


const carousel = [Carousel1,Carousel2];
const catCard = [Iphone,Airpods,Macbook,Watch];

const Home = () => {

  return(
    <>
    <div className="container">
      <Header/>
      <Carousel autoplay className="carousel">
      {carousel.map((e) => {
          return <img src={e} className="carousel-img" alt="carousel"></img>;
      })}
      </Carousel>
      <div className="cards">  
        <Card className="card">
          <h1>Browse Games</h1>
          <img src={Games} alt="Games Category" className="card-content"></img>
          <br />
          <Link to="/categories" state={"Games"} className="link">
            Shop Now
          </Link>
        </Card>
        <Card className="card">
          <h1>Eau de parfum</h1>
          <img src={Perfumes} alt="Perfumes" className="card-content"></img>
          <br />
          <Link to="/" className="link">
            View Product
          </Link>
        </Card>
        <Card className="card">
          <h1>Hard Disks</h1>
          <img src={Harddrive} alt="Hard Disks" className="card-content"></img>
          <br />
          <Link to="/" className="link">
            View Product
          </Link>
        </Card>
        <Card className="card">
          <h1>Shop By Category</h1>
          <div className="card-content">
            {catCard.map((e) => {
              return (
                
                <img
                  src={e}
                  alt="category"
                  className="card-category"
                  onClick={() => console.log("beauty")}
                ></img>
                
                
              );
            })}
            <br />
            <Link to="/" className="link">
              Shop All
            </Link>
          </div>
        </Card>
      </div>
    </div>
    </>
  )
  }
  
  export default Home;