import React from "react";
import { GiVibratingShield } from "react-icons/gi";
import { BsBookmarkPlus } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import axios from "axios";
import { useWish } from "../context/wishlistContext";
import {
  addWish,
  removeWish,
} from "../context/utilityFunctions/wishlistUtility";
import { toast } from "react-toastify";

const SingleProduct = ({ product }) => {
  const token = localStorage.getItem("token");
  const { cart, setCart } = useCart();
  const { wish, setWish } = useWish();

  const navigate = useNavigate();

  function pageNavigator(id) {
    navigate(`/single/${id}`);
  }

  async function addToCart(prod) {
    if (cart.find((item) => item._id === prod._id)) {
      console.warn("Item is Already present in cart");
      return;
    }
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
      toast.success("Item added to cart");
    } catch (e) {
      console.log("ADDTOCARTERROR", e);
    }
  }

  return (
    <>
      <div
        key={product._id}
        className="flex flex-col rounded my-5 w-[250px] max-w-[auto] h-[250px] max-h-[auto] bg-gray-100 text max-sm:pb-2 text-zinc-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
    "
      >
        <div className="object-contain bg-gray-100 ">
          <img
            src={product.url}
            alt=""
            className="w-[100%] "
            onClick={() => pageNavigator(product._id)}
          />
        </div>
        <div className="flex justify-between items-center px-1 border border-b-gray-200 md:border md:border-b-gray-200">
          <div
            className="flex flex-col items-start py-2"
            onClick={() => pageNavigator(product._id)}
          >
            <p className="justify-items-start font-semibold">
              {product.brand}-
              <span className="text-[15px] font-normal">{product.model}</span>
            </p>

            <p className="justify-items-start font-normal">
              <span className="text-[15px] font-semibold">Fuel-</span>
              {product.fueltype}
            </p>
          </div>

          <div onClick={() => pageNavigator(product._id)}>
            <p className="font-normal">
              <span className="text-[15px] font-semibold">Price-</span>
              {product.price}
            </p>
            <p className="flex gap-2 px-3">
              <GiVibratingShield
                size={15}
                className="justify-center mt-1 ml-3"
              />
              {product.ncap}
            </p>
          </div>
        </div>

        <div className="pt-1 flex justify-between px-3 py-1">
          {cart.some((car) => car._id === product._id) ? (
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
                token ? addToCart(product) : navigate("/login");
              }}
            >
              Add to Cart
            </button>
          )}

          {wish.some((ele) => ele._id === product._id) ? (
            <span
              onClick={() => {
                token ? removeWish(product._id, setWish) : navigate("/login");
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
                token ? addWish(product, setWish) : navigate("/login");
                console.log("onclick chal rha h");
              }}
            >
              <BsBookmarkPlus size={20} className="hover:text-rose-600" />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
