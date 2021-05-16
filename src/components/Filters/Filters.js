import React from "react";
import { Select } from "antd";
import { Focusable } from "react-js-spatial-navigation";
import "./Filters.scss";

export default function Filters() {
  const { Option } = Select;

  return (
    <div className="filters">
      <Focusable>
        <Select size="large" placeholder="Tipo de auto">
          <Option>Sedan</Option>
          <Option>Compacto</Option>
          <Option>Familiar</Option>
          <Option>SUV</Option>
        </Select>
      </Focusable>
      <Focusable>
        <Select size="large" placeholder="Marca">
          <Option>Chrysler</Option>
          <Option>Fiat</Option>
          <Option>Renault</Option>
          <Option>Peugeot</Option>
        </Select>
      </Focusable>
      <Focusable>
        <Select size="large" placeholder="Modelo"></Select>
      </Focusable>
    </div>
  );
}
