import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "./assets/flower.jpg";
import slide2 from "./assets/children.jpg"
import slide3 from "./assets/cake.jpg"
import slide4 from "./assets/pic.png"
import './carosual.css'


export default function Carosual() {
  return (
    <Carousel
      interval={2000} 
      controls={true}
      indicators={true}
      pause={false} 
      prevIcon={<i className="fa-solid fa-chevron-left custom-arrow"></i>}
      nextIcon={<i className="fa-solid fa-chevron-right custom-arrow"></i>}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={slide4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
