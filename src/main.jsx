import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./components/home/Home";

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
