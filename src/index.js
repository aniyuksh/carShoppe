import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import ProductContext from "./context/ProductContext";
import FilterContextProvider from "../src/context/FilterContext"
import { AuthContextProvider } from "./context/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <FilterContextProvider>
      <ProductContext>
      <App />
      </ProductContext>
      </FilterContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
