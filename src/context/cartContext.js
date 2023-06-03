import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useAuth } from "./auth-context";

const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  // const token = localStorage.getItem("token");
  // console.log("TOKEN", token)
  const { authState } = useAuth();
  // console.log("AUTHSTATE" , JSON.stringify(authState));
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      if (authState.isAuth) {
        let token = localStorage.getItem("token");
        (async () => {
          // console.log("async function useeffect", token)
          const { data } = await axios.get("/api/user/cart", {
            headers: {
              authorization: token,
            },
          });
          setCart(data.cart);
          // console.log("data",data.cart)
        })();
      } else {
        return;
      }
    } catch (e) {
      console.log(e);
    }
  }, [authState.isAuth]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartContextProvider, useCart };
