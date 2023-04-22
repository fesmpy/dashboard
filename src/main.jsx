import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//components
import Home from "./components/home/Home";

//react router dom
import { HashRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' component={<Home />} />
      </Routes>
    </Router>
    <Home />
  </React.StrictMode>
);
