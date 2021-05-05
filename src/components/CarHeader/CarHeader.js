import React from "react";
import "./CarHeader.scss";

export default function CarHeader({ vehicle }) {
  return (
    <div className="car-header">
      <div className="car-header_name">
        <h1>
          {vehicle.brand.name} {vehicle.model.name}
        </h1>
      </div>
      <div className="car-header_version">
        <h2>{vehicle.version.name}</h2>
      </div>
      <div className="car-header_price">
        <h2>${vehicle.factoryPrice}</h2>
      </div>
    </div>
  );
}
