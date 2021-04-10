import React from "react";
import "./List.scss";
import { Card } from "antd";

export default function List(props) {
  const { Meta } = Card;
  const { data } = props;

  const ListItems = () =>
    data.map((vehicle) => (
      <Card
        className="list_item"
        hoverable
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
    ));

  return (
    <div className="list">
      <ListItems />
    </div>
  );
}
