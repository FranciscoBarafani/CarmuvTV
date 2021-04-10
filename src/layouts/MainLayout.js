import React from "react";
import "./MainLayout.scss";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BodyLayout from "./BodyLayout";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <div className="main-layout_header">
        <Header />
      </div>
      <div className="main-layout_body">
        <BodyLayout />
      </div>
      <div className="main-layout_footer">
        <Footer />
      </div>
    </div>
  );
}
