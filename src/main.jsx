import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//components
import Home from "./components/home/Home";

//react router dom
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Home />
    </HashRouter>
  </React.StrictMode>
);
