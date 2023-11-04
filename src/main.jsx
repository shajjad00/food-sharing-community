import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Provider from "./Provider/Provider.jsx";
import { RouterProvider } from "react-router-dom";
import Route from "./Route/Route.jsx";
// import PropTypes from 'prop-types';
// import { FaBeer } from 'react-icons/fa';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={Route}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
