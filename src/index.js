import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import ProductContext from "./context/ProductContext";
import FilterContextProvider from "../src/context/FilterContext";
import { AuthContextProvider } from "./context/auth-context";
import { CartContextProvider } from "./context/cartContext";
import { WishListContextProvider } from "./context/wishlistContext";
import { AddressProvider } from "./context/addressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <FilterContextProvider>
          <AddressProvider>
            <CartContextProvider>
              <WishListContextProvider>
                <ProductContext>
                  <App />
                </ProductContext>
              </WishListContextProvider>
            </CartContextProvider>
          </AddressProvider>
        </FilterContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
