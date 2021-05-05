import React from "react";
import "./Carousel.scss";

export default function Carousel({ images }) {
  
  return (
    <div className="carousel">
          <img src={images[0]} alt="images" />
    </div>
  );
}
