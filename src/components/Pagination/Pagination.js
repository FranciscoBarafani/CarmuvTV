import React from "react";
import "./Pagination.scss";
import { Pagination as Paginator } from "antd";

export default function Pagination() {
  return <Paginator defaultCurrent={1} total={10} />;
}
