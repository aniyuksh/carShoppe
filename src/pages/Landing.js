import React from "react";
import Navbar from "../components/navbar";
// import i1 from "../../src/assets/hero-images/i1.jpg";
import { categories } from "../backend/db/categories";
import CategoryCard from "../components/CategoryCard";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/footer";
import { RotatingLines } from "react-loader-spinner";

const Landing = () => {
  const navigate = useNavigate();

  if (categories.length === 0) {
    return (
      <div className="flex justify-center items-center h-[100vh] w-[100vw]">
        <RotatingLines />
      </div>
    );
  }

  return (
    <>
      {/* {categories.length < 0 && <RotatingLines />} */}
      <Navbar />
      <div className="text-center">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
            loading="lazy"
            className="h-[100vh] w-[100vw]"
          />
        </div>
        <div className="absolute top-[40%] left-[32%]  max-sm:top-[40%] max-sm:left-[20%]">
          <p className="font-bold text-zinc-50 text-5xl pb-5 max-sm:text-3xl ">
            Book A Ride With Us
          </p>
          <button
            className="px-5 border border-gray-600 rounded-md py-1 font-bold text-zinc-50 hover:text-gray-800 hover:bg-zinc-50 duration-500"
            onClick={() => navigate("/productDisplay")}
          >
            Shop Now.
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="py-4 text-center">
          <p className="text-4xl text-zinc-700 font-bold"> Categories </p>
        </div>
        <div className="flex justify-evenly my-5 max-sm:flex-col max-sm:justify-center items-center cursor-pointer">
          {categories.map((category) => {
            return (
              <>
                <CategoryCard category={category} />
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
