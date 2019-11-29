import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../template/custom.css";

import React from "react";
import Routes from "./routes";
import Menu from "../template/menu";

export default App => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
);
