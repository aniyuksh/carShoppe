import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";
import { useProductContext } from "../context/ProductContext";
import { GiVibratingShield } from "react-icons/gi";
import { BsBookmarkPlus } from "react-icons/bs";
import { useCart } from "../context/cartContext";
import axios from "axios";
import { useWish } from "../context/wishlistContext";
import {
  addWish,
  removeWish,
} from "../context/utilityFunctions/wishlistUtility";

const SingleProduct = () => {
  const { id } = useParams();
  console.log("typeof", typeof id);
  const navigate = useNavigate();
  const [clickedData, setClickedData] = useState([]);
  const { productStateData } = useProductContext();
  const { productData } = productStateData;
  const data = productData.flat(1);
  let token = localStorage.getItem("token");
  const { cart, setCart } = useCart();
  const { wish, setWish } = useWish();

  useEffect(() => {
    setClickedData(data?.find(({ _id }) => _id === id));
  }, [id, data]);

  async function addToCart(prod) {
    if (cart.find((item) => item._id === prod._id)) {
      console.warn("Item is Already present in cart");
      return;
    }
    let token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        "/api/user/cart",
        { product: { ...prod, qty: 1 } },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setCart(data.cart);
    } catch (e) {
      console.log("ADDTOCARTERROR", e);
    }
  }

  return (
    <div className="flex flex-col w-[100vw]  justify-center items-center ">
      <Navbar />
      <div className="flex sm:flex-row flex-col mx-auto h-[90vh] w-[100%] justify-center items-center sm:gap-10 gap-0 justify-items-center">
        <div className="sm:min-w-[250px] sm:min-h-[500px] min-h-[250px] sm:w-[45%] w-[90%] justify-center items-center flex">
          <div>
            <img src={clickedData?.url} alt="Image sent" />
          </div>
        </div>
        <div className="flex flex-col sm:min-h-[500px] min-h-[250px] sm:w-[45%] sm:min-w-[250px] w-[90%] justify-center">
          <div className="flex flex-col gap-4">
            <div className="flex text-4xl font-semibold gap-8 text-center">
              <p>{clickedData?.model} </p>
              <p>{clickedData?.brand}</p>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              autem praesentium blanditiis deserunt doloribus dicta, fugiat,
              debitis cumque aperiam ratione alias ad, voluptatem nam optio
              expedita maiores nihil nulla nobis.
            </p>
            <div className="flex justify-between px-[1rem]">
              <div className="flex gap-1">
                <GiVibratingShield size={20} className="top-1 relative" />
                <p>{clickedData?.ncap}</p>
              </div>
              <p>Fuel: {clickedData?.fueltype}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-start px-[1rem] text-2xl">
                <span className="font-bold">&#8377;</span>
                {clickedData?.price}
              </p>
              <p>Mileage: {clickedData.mileage}</p>
            </div>
          </div>
          <div className="flex mt-[2rem] gap-10 ml-[1rem]">
            {cart.some((car) => car._id === clickedData._id) ? (
              <button
                className="border border-gray-700 rounded-md px-2 hover:text-slate-50 hover:bg-gray-800"
                onClick={() => {
                  token ? navigate("/cart") : navigate("/login");
                }}
              >
                Go to Cart
              </button>
            ) : (
              <button
                className="border border-gray-700 rounded-md px-2 hover:text-slate-50 hover:bg-gray-800"
                onClick={() => {
                  token ? addToCart(clickedData) : navigate("/login");
                }}
              >
                Add to Cart
              </button>
            )}

            {wish.some((ele) => ele._id === clickedData._id) ? (
              <span
                onClick={() => {
                  token
                    ? removeWish(clickedData._id, setWish)
                    : navigate("/login");
                }}
                className="flex gap-[1rem] border border-gray-700 rounded-md px-2 hover:text-slate-50 hover:bg-gray-800 hover:cursor-pointer"
              >
                Remove from Wishlist{" "}
                <BsBookmarkPlus
                  size={20}
                  className="hover:text-rose-600 text-red-700"
                />
              </span>
            ) : (
              <span
                onClick={() => {
                  token ? addWish(clickedData, setWish) : navigate("/login");
                }}
                className="flex gap-[1rem] border border-gray-700 rounded-md px-2 hover:text-slate-50 hover:bg-gray-800 hover:cursor-pointer"
              >
                Add to Wishlist
                <BsBookmarkPlus
                  size={20}
                  className="hover:text-rose-600 relative top-[2px]"
                />
              </span>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SingleProduct;

{
  /* <section className="min-h-[70vh] my-3 flex flex-col justify-center m-auto item max-w-[50%] text-zinc-800 ">
        <div className="flex flex-col border border-gray-400 my-3  items-center">
          <div className="flex justify-center ">
            <img src={clickedData?.url} />
          </div>

          <div className="">
            <div className="px-3 py-3">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p className="justify-start items-start flex text-4xl my-3">
                    {clickedData?.model} --- {clickedData?.brand}
                  </p>
                  <p className="items-start flex text-2xl my-3">
                    {clickedData?.categoryName} |{" "}
                    <GiVibratingShield
                      size={15}
                      className="justify-center mt-1 relative top-2"
                    />
                    {clickedData?.ncap}
                  </p>
                </div>
                <div className="flex flex-col justify-evenly items-end justify-items-end">
                  <p className="flex text-xl my-2">
                    <span>&#8377;</span>
                    {clickedData?.price}
                  </p>
                  <p className="flex text-lg my-2">
                    <span className="text-md font-semibold">
                      Fuel Type: &nbsp;
                    </span>{" "}
                    {clickedData?.fueltype}
                  </p>
                </div>
              </div>
              <div className="flex ">
                <p className="flex justify-start items-start justify-items-start">
                  <span className="text-md font-semibold">Desc:</span> Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Minima eius
                  doloremque inventore, minus quas molestias?
                </p>
              </div>

              <div className="flex justify-evenly">
               
                {cart.some((car) => car._id === clickedData._id) ? (
                  <button
                    className="border border-gray-700 rounded-md px-2 hover:text-slate-50 hover:bg-gray-800"
                    onClick={() => {
                      token ? navigate("/cart") : navigate("/login");
                    }}
                  >
                    Go to Cart
                  </button>
                ) : (
                  <button
                    className="border border-gray-700 rounded-md px-2 hover:text-slate-50 hover:bg-gray-800"
                    onClick={() => {
                      token ? addToCart(clickedData) : navigate("/login");
                    }}
                  >
                    Add to Cart
                  </button>
                )}

                {wish.some((ele) => ele._id === clickedData._id) ? (
                  <span
                    onClick={() => {
                      token
                        ? removeWish(clickedData._id, setWish)
                        : navigate("/login");
                      console.log("onlick chal rha hai");
                    }}
                  >
                    <BsBookmarkPlus
                      size={20}
                      className="hover:text-rose-600 text-red-700"
                    />
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      token
                        ? addWish(clickedData, setWish)
                        : navigate("/login");
                      console.log("onclick chal rha h");
                    }}
                  >
                    <BsBookmarkPlus size={20} className="hover:text-rose-600" />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        
      </section> */
}
