import React from "react";
import "./SearchBar.scss";
import { Input } from "antd";

export default function SearchBar() {
  const { Search } = Input;

  return (
    <div className="searchbar">
      <Search placeholder="Que estas buscando?" size="large" />
    </div>
  );
}
