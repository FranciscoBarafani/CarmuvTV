import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel"
import Specs from "../components/Specs/Specs"

import "./DetailLayout.scss";

export default function DetailLayout({ vehicles }) {
  const { id } = useParams();
  const vehicle = vehicles.find((element) =>
    element.id === id ? true : false
  );

  return (
    <div className="detail-layout">
      <div className="detail-layout-container">
        <div className="detail-layout-container_carousel">
          <Carousel images={vehicle.images} />
        </div>
        <div className="detail-layout-container_specs">
          <Specs vehicle={vehicle}/>
        </div>
      </div>
    </div>
  );
}
