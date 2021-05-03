import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./MainLayout.scss";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DetailLayout from "./DetailLayout"
import BodyLayout from "./BodyLayout";
import vehicles from "../constants/vehicles";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <div className="main-layout_header">
        <Header />
      </div>
      <div className="main-layout_body">
        <Router>
          <Switch>
            <Route path={"/"} exact>
              <BodyLayout vehicles={vehicles} />
            </Route>
            <Route path={"/detail/:id"} >
              <DetailLayout vehicles={vehicles}/>
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="main-layout_footer">
        <Footer />
      </div>
    </div>
  );
}
