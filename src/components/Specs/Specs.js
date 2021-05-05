import React from 'react'
import { Descriptions } from "antd"
import "./Specs.scss"

export default function Specs({vehicle}) {

  console.log(vehicle);
  const { Item } = Descriptions

  return (
    <Descriptions
      bordered
      title="Especificaciones"
      column={1}
    >
      <Item label="Segmento"><b>{vehicle.segment.name}</b></Item>
      <Item label="Transmisión"><b>{vehicle.transmission}</b></Item>
      <Item label="Tipo de combustible"><b>{vehicle.fuel}</b></Item>
    </Descriptions>
  )
}
