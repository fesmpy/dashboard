import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//components
import Home from "./components/home/Home";

//react router dom
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='#/' element={<Home />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
