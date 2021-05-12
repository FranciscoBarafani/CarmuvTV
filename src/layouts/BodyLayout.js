import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import List from "../components/List/List";
import Pagination from "../components/Pagination/Pagination";
import Filters from "../components/Filters/Filters";

import "./BodyLayout.scss";

export default function BodyLayout(props) {
  const { vehicles } = props;
  return (
    <div className="body-layout">
      <div className="body-layout_searchbar">
        <SearchBar />
      </div>
      <div className="body-layout_filters">
        <Filters />
      </div>
      <div className="body-layout_cards">
        <List data={vehicles} />
      </div>
      <div className="body-layout_pagination">
        <Pagination />
      </div>
    </div>
  );
}
