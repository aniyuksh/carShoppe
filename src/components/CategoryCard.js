import React from "react";
import i5 from "../../src/assets/hero-images/i5.jpg";
import { useFilterContext } from "../context/FilterContext";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { state, dispatch } = useFilterContext();
  const navigate = useNavigate();

  function filter(cat) {
    dispatch({ type: "clearFilter" });
    dispatch({ type: "filterCategory", payload: cat.categoryName });
    navigate("/productDisplay");
  }

  return (
    <div
      className="h-[220px] w-[350px] max-sm:my-5 hover:opacity-90 relative "
      onClick={() => filter(category)}
    >
      <img src={i5} className="object-fill group-hover:opacity-50" />
      <p className="absolute top-[20%] left-[37%] text-white text-2xl">
        {category.categoryName}
      </p>
    </div>
  );
};

export default CategoryCard;
