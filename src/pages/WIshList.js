import React from "react";
import { useWish } from "../context/wishlistContext";
import Navbar from "../components/navbar";
import { GiVibratingShield } from "react-icons/gi";
import { BsBookmarkPlus } from "react-icons/bs";
import {
  addWish,
  removeWish,
} from "../context/utilityFunctions/wishlistUtility";
import axios from "axios";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

const WIshList = () => {
  const { wish, setWish } = useWish();
  const { cart, setCart } = useCart();
  const navigate = useNavigate();
  let token = localStorage?.getItem("token");
  // console.log("wish", wish);
  // console.log("wishlist cart", cart);

  async function qtyHandler(e, _id, actionType) {
    e.preventDefault();
    let token = localStorage.getItem("token");
    console.log(token);

    try {
      const { data } = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: {
            type: actionType,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setCart(data.cart);
      toast.success("Updated cart item's qty");
    } catch (e) {
      console.log(e);
    }
  }

  async function addToCart(prod) {
    let token = localStorage.getItem("token");
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
      toast.success("Added to cart from wishlist");
    } catch (e) {
      console.log("ADDTOCARTERROR", e);
    }
  }

  // if (wish.length === 0) {
  //   return (
  //     <div className="flex justify-center items-center h-[100vh] w-[100vw]">
  //       <RotatingLines />
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar />
      {wish.length > 0 && (
        <p className="text-4xl text-zinc-800">WishList({wish.length})</p>
      )}
      <section className="justify-evenly max-sm:flex max-sm:flex-col md:flex md:flex-row">
        {wish.length === 0 && (
          <p
            className="text-[50px] text-zinc-800 flex items-center justify-center h-[50vh]
      md:mx-auto
        "
          >
            Wishlist is empty :/
          </p>
        )}
        <div className=" inline-block">
          {wish.map((item) => {
            return (
              <div
                className="border border-gray-900 min-h-[250px] max-w-[80%] mx-auto my-4 flex flex-col 
            md:w-[100%]
            "
              >
                <div className="">
                  <img src={item.url} />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between mx-2 text-lg my-1">
                    <p className="">
                      {item.brand}-<span>{item.model}</span>
                    </p>
                    <p>&#8377; {item.price}</p>
                  </div>
                  <div className="flex justify-between mx-2 text-lg my-1">
                    <p className="">Fuel: {item.fueltype}</p>
                    <p className="flex ">
                      <GiVibratingShield
                        size={20}
                        className="relative top-[6px]"
                      />
                      {item.ncap}
                    </p>
                  </div>

                  <div className="flex justify-between mx-3 my-3 text-lg ">
                    <p>
                      {cart?.some((a) => a._id === item._id) ? (
                        <button
                          className="border border-gray-800 rounded-lg px-1 hover:bg-slate-800 hover:text-zinc-100"
                          onClick={(e) => qtyHandler(e, item._id, "increment")}
                        >
                          Add to cart
                        </button>
                      ) : (
                        <button
                          className="border border-gray-800 rounded-lg px-1 hover:bg-slate-800 hover:text-zinc-100"
                          onClick={(e) => addToCart(item)}
                        >
                          Add to cart
                        </button>
                      )}
                    </p>
                    <p>
                      {wish.some((ele) => ele._id === item._id) ? (
                        <span
                          onClick={() =>
                            token
                              ? removeWish(item._id, setWish)
                              : navigate("/login")
                          }
                        >
                          <BsBookmarkPlus
                            size={20}
                            className="hover:text-rose-600 text-red-700"
                          />
                        </span>
                      ) : (
                        <span
                          onClick={() =>
                            token ? addWish(item, setWish) : navigate("/login")
                          }
                        >
                          <BsBookmarkPlus
                            size={20}
                            className="hover:text-rose-600"
                          />
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WIshList;

{
  /* <button
                          className="border border-gray-800 rounded-lg px-1 hover:bg-slate-800 hover:text-zinc-100"
                          onClick={(e) => qtyHandler(e, item._id, "increment")}
                        ></button> */
}
