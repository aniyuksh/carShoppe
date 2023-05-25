import React, { useState } from "react";
// import { useProductContext } from "../context/ProductContext";
import { useProductContext } from "../context/ProductContext";
import { useFilterContext } from "../context/FilterContext";
const Brands = ["Suzuki", "Tata", "Hyundai", "Skoda"];

export const Sidebar = () => {
  const { productStateData } = useProductContext();
  const { state, dispatch } = useFilterContext();
  const [isFilterToggle, setFilterToggle] = useState(false);

  let  {categoryData}  = productStateData
  let categoryMapData = (categoryData.flat(1))
  

  
  function filterToggleHandler() {
    setFilterToggle((prev) => !prev);
  }

  function categoryHandler(e) {
    let val = e.target.value;
    let check = e.target.checked;
    if (check) {
      return { type: "filterCategory", payload: val };
    } else {
      return { type: "removeCategory", payload: val };
    }
  }

  function fuelHandler(e) {
    let val = e.target.value;
    let check = e.target.checked;
    if (check) {
      return {
        type: "filterFuel",
        payload: val,
      };
    } else {
      return {
        type: "removeFuel",
        payload: val,
      };
    }
  }

  function brandHandler(e) {
    let val = e.target.value;
    let check = e.target.checked;
    if (check) {
      return {
        type: "filterBrand",
        payload: val,
      };
    } else {
      return {
        type: "removeBrand",
        payload: val,
      };
    }
  }

  
  return (
    
    <aside className="text-zinc-700 h-[40%] sticky justify-between top-0 left-0 y overflow-y-scroll min-w-[16rem] max-w-[24rem] py-2 px-2">
     
      <section className="flex justify-between">
        <h2 className="text-lg">
          <span className="font-semibold">Apply</span>
        </h2>
        <button
          className="text-lg"
          onClick={() => dispatch({ type: "clearFilter" })}
        >
          <span className="font-semibold"> RESET</span>
        </button>
      </section>

      <section className="flex justify-around flex-col border-b-2 border-gray-300 py-2 mb-4">
        <p className="text-lg">Price</p>
        <input
          type="range"
          min={10000}
          max={2200000}
          step={100000}
          defaultValue={state.filterPriceRange}
          onChange={(e) =>
            dispatch({ type: "filterPrice", payload: e.target.value })
          }
        />
      </section>

      <section className="flex flex-col items-start border-b-2 border-gray-300 py-2 mb-4">
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        {categoryMapData?.map((category) => {
          // console.log(1);
          return (
            <div className="flex pb-1">
              <input
                type="checkbox"
                // checked={state.filterCategory}
                value={category.categoryName}
                id={category.categoryName}
                name="category"
                className="mr-2"
                onChange={(event) => dispatch(categoryHandler(event))}
              />{" "}
              {category.categoryName.toUpperCase()}
            </div>
          );
        })}
      </section>
      <section className="flex flex-col items-start border-b-2 border-gray-300 py-2 mb-4">
        <h2 className="text-lg font-semibold mb-3">Fuel Type</h2>
        <div>
          <input
            type="checkbox"
            value="Petrol"
            name="fuel"
            className="mr-2"
            // checked={state.filterCategory}
            onChange={(e) => dispatch(fuelHandler(e))}
          />
          <label>Petrol</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Diesel"
            name="fuel"
            className="mr-2"
            // checked={state.filterCategory}
            onChange={(e) => dispatch(fuelHandler(e))}
          />
          <label>Diesel</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="cng"
            name="fuel"
            className="mr-2"
            // checked={state.filterCategory}
            onChange={(e) => dispatch(fuelHandler(e))}
          />
          <label>Cng</label>
        </div>
      </section>

      <section className="flex flex-col items-start border-b-2 border-gray-300 py-2 mb-4">
        <h2 className="text-lg">
          <span className="font-semibold">Brands</span>
        </h2>
        <ul className="flex flex-col items-start">
          {Brands.map((brand) => (
            <li>
              <input
                type="checkbox"
                value={brand}
                id={brand}
                name="brand"
                className="mr-2"
                // checked={state.filterBrand}
                onChange={(e) => dispatch(brandHandler(e))}
              />
              {brand}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col items-start border-b-2 border-gray-300 py-2 mb-4">
        <h2 className="text-lg">
          <span className="font-semibold">Ncap Rating</span>
        </h2>

        <div className="flex">
          <input
            type="radio"
            value={4}
            name="ncap"
            onChange={(e) =>
              dispatch({ type: "filterRating", payload: e.target.value })
            }
          />
          4.0 and above
        </div>
        <div className="flex">
          <input
            type="radio"
            value={3}
            name="ncap"
            onChange={(e) =>
              dispatch({ type: "filterRating", payload: e.target.value })
            }
          />
          3.0 and above
        </div>
        <div className="flex">
          <input
            type="radio"
            value={2}
            name="ncap"
            onChange={(e) =>
              dispatch({ type: "filterRating", payload: e.target.value })
            }
          />
          2.0 and above
        </div>
        <div className="flex">
          <input
            type="radio"
            value={1}
            name="ncap"
            onChange={(e) =>
              dispatch({ type: "filterRating", payload: e.target.value })
            }
          />
          1.0 and above
        </div>
      </section>

      <section className="flex flex-col items-start border-b-2 border-gray-300 py-2 mb-4">
        <h2 className="text-lg">
          <span className="font-semibold">Sort By Price</span>
        </h2>

        <div className="flex">
          <input
            type="radio"
            value="lowToHigh"
            name="priceSort"
            id="priceSort"
            onChange={(e) =>
              dispatch({ type: "lowToHigh", payload: e.target.value })
            }
          />
          Low to High
        </div>
        <div className="flex">
          <input
            type="radio"
            value="highToLow"
            name="priceSort"
            id="priceSort"
            onChange={(e) =>
              dispatch({ type: "highToLow", payload: e.target.value })
            }
          />
          High to Low
        </div>
      </section>

      {/* <button onClick={filterToggleHandler}>Filters</button> */}
    </aside>
  );
};
