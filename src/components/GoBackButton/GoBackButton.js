import React from "react";
import "./GoBackButton.scss";
import { Focusable } from "react-js-spatial-navigation";
import { LeftOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";

export default function GoBackButton() {
  const history = useHistory()
  const handleGoBack = () => {
    history.push("/")
  }

  return (
    <div className="goback">
      <Focusable onClickEnter={() => handleGoBack()}>
          <LeftOutlined />
          Volver atrás
      </Focusable>
    </div>
  );
}
