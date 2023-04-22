import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//components
import Home from "./components/home/Home";

//react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        {/* <App /> */}
    </React.StrictMode>
);
