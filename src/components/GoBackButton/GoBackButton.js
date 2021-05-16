import React from "react";
import "./GoBackButton.scss";
import { Focusable } from "react-js-spatial-navigation";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function GoBackButton() {
  return (
    <div className="goback">
      <Focusable>
        <Link to="/">
          <LeftOutlined />
          Volver atrás
        </Link>
      </Focusable>
    </div>
  );
}
