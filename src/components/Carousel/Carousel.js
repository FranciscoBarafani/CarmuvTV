import React from "react";
import { Carousel as CarouselComponent } from "antd";
import "./Carousel.scss";

export default function Carousel({ images }) {
  console.log(images);
  
  return (
    <div className="carousel">
          <img src={images[0]} alt="images" />
    </div>
  );
}
