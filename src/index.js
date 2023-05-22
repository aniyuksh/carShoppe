import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import ProductContext from "./context/ProductContext";
import FilterContextProvider from "../src/context/FilterContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterContextProvider>
      <ProductContext>
      <App />
      </ProductContext>
      </FilterContextProvider>
     
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
