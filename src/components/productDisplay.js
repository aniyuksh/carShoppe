import React, { useState } from "react";
import { Sidebar } from "./sidebar";

import SingleProduct from "./SingleProduct";
import { useProductContext } from "../context/ProductContext";
import { useFilterContext } from "../context/FilterContext";
import {
  sortByPriceFunction,
  applyFilter,
} from "../context/utilityFunctions/filterUtility";
import Navbar from "./navbar";
export const ProductDisplay = () => {
  const { productStateData } = useProductContext();
  const [showSideBar, setShowSideBar] = useState(false);
  const { state } = useFilterContext();
  // console.log("productStateData" , ...productStateData.productData)

  function sideNavHandler() {
    setShowSideBar((prev) => !prev);
  }
  //  console.log("STATE" , state);
  const {
    filterSearch,
    filterCategory,
    filterFuel,
    filterBrand,
    filterRating,
    filterPriceRange,
    filterByPrice,
  } = state;

  let sortedData = sortByPriceFunction(
    ...productStateData.productData,
    filterByPrice
  );
  //  console.log(
  //   "sorted" , sortedData
  //  )
  let appliedFilterData = applyFilter(
    sortedData,
    filterSearch,
    filterCategory,
    filterFuel,
    filterBrand,
    filterRating,
    filterPriceRange
  );
  //  console.log(
  //   "appliedFilterData" , appliedFilterData
  //  )
  const s = productStateData.productData.flat(1);
  return (
    <div className="w-[100vw] h-[100vh]">
      <Navbar />

      <div className="flex flex-col max-w-[100vw] w-[100vw] h-[90vh] sm:flex-row">
        <section className="flex flex-col max-w-[100%] w-[100%] sm:flex-row h-[100%]">
          <section
            className={
              showSideBar
                ? "justify-self-center self-center bottom-9 bg-white opacity-[98%] w-[100%] justify-center flex sticky top-20 z-20 my-2 mr-6 ml-4 overflow-y-scroll px-5"
                : "hidden sm:flex sticky h-full justify-between top-0 left-0  max-w-[20%] w-[20%] "
            }
          >
            <Sidebar />
          </section>
          <div className="flex flex-col  items-center justify-center">
            <p>
              Showing {appliedFilterData.length} of {s.length}
            </p>
            {/* <div className="flex justify-center items-center w-[100%] border border-black"> */}
            <div className="flex flex-wrap gap-3 border border-red-900 justify-center sm:justify-start">
              {appliedFilterData.length === 0 && (
                <p className="text-[50px] text-zinc-800 w-[full] md:mx-auto ">
                  Sorry No Such Product Found..
                </p>
              )}

              {appliedFilterData &&
                appliedFilterData?.map((car) => (
                  <SingleProduct product={car} />
                ))}
            </div>
            {/* </div> */}
          </div>
        </section>

        <button
          className="sm:hidden bg-white flex justify-self-center self-center fixed z-10  bottom-0 w-[100%] justify-center text-xl font-bold text-center items-center mx-auto opacity-80"
          onClick={sideNavHandler}
        >
          Filters
        </button>
      </div>
    </div>
  );
};

{
  /* <main className="grid grid-cols-1 gap-6 max-sm:w-[70%] max-sm:mx-auto sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mr-5 h-[100%] overflow-scroll"></main> */
}
