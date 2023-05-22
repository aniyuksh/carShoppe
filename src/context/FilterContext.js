import { createContext , useContext , useReducer } from "react";
import {  filterReducer, initialState }  from "../reducer/FilterReducer";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [state ,  dispatch] = useReducer( filterReducer , initialState);
  console.log(state)
  return(
    <FilterContext.Provider value={{state, dispatch }}>
      {children}
     </FilterContext.Provider>
  )
}


export const useFilterContext = () => useContext(FilterContext);
export default FilterContextProvider