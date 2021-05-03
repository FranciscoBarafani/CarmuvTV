import React, { useState } from "react";
import "./List.scss";
import { Card } from "antd";
import { Focusable } from "react-js-spatial-navigation";
import { Link } from "react-router-dom";

export default function List(props) {
  const { Meta } = Card;
  const { data } = props;

  const onFocus = (id) => {
    console.log(id);
    //setFocusedVehicle(id)
  };

  const ListItems = () =>
    data.map((vehicle) => (
      <Link to={`/detail/${vehicle.id}`}>
        <Focusable onFocus={() => onFocus(vehicle.id)}>
          <Card
            className="list_item"
            style={{ width: 300 }}
            cover={<img alt="vehicle" src={vehicle.images[0]} />}
          >
            <div>
              <Meta
                title={vehicle.brand.name}
                description={`${vehicle.model.name} ${vehicle.version.name}`}
              />
            </div>
            <div className="list_item-pricetag">
              <h1>$ {vehicle.factoryPrice}</h1>
            </div>
          </Card>
        </Focusable>
      </Link>
    ));

  return (
    <div className="list">
      <ListItems />
    </div>
  );
}
