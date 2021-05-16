import React from "react";
import "./SearchBar.scss";
import { Focusable } from "react-js-spatial-navigation";
import { Input } from "antd";

export default function SearchBar() {
  const { Search } = Input;

  return (
    <div className="searchbar">
      <Focusable>
        <Search placeholder="Que estas buscando?" size="large" />
      </Focusable>
    </div>
  );
}
