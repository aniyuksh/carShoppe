import React, { createContext, useContext, useReducer } from "react";
import { addressReducer, initial } from "../reducer/addressReducer";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addressReducer, initial);
  return (
    <AddressContext.Provider value={{ state, dispatch }}>
      {children}
    </AddressContext.Provider>
  );
};
const useAddr = () => useContext(AddressContext);
export { AddressProvider, useAddr };
