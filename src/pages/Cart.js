import React, { useState } from "react";
import axios from "axios";
import { useCart } from "../context/cartContext";
import Navbar from "../components/navbar";
import { GiVibratingShield } from "react-icons/gi";
import { BsBookmarkPlus } from "react-icons/bs";
// import {IoIosAddCircleOutline} from "react-icons/io"
import { GrSubtractCircle, GrAddCircle } from "react-icons/gr";
import {
  addWish,
  removeWish,
} from "../context/utilityFunctions/wishlistUtility";
import { useNavigate } from "react-router-dom";
import { useWish } from "../context/wishlistContext";
import AddressForm from "../components/AddressForm";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const { wish, setWish } = useWish();

  async function cartRemoveFunc(e, id) {
    e.preventDefault();
    try {
      const { data } = await axios.delete(`/api/user/cart/${id}`, {
        headers: {
          authorization: token,
        },
      });
      setCart(data.cart);
      toast.info("Item Removed from Cart");
    } catch (err) {
      console.log("cart removal error", err);
    }
  }

  async function qtyHandler(e, _id, actionType, q) {
    // console.log(actionType);
    if (actionType == "decrement" && q == 1) {
      cartRemoveFunc(e, _id);
    }
    e.preventDefault();
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
      // console.log("DATA.CART", data.cart);
      setCart(data.cart);
      if (actionType == "increment") {
        toast.success("Quantity Increased");
      } else {
        toast.success("Quantity Decreased");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Navbar />
      {/* <AddressForm /> */}
      <section className="justify-evenly flex max-sm:flex-col">
        {cart.length === 0 && (
          <p
            className="text-[50px] text-zinc-800 flex items-center justify-center h-[50vh]
      md:mx-auto
        "
          >
            Cart is empty :/
          </p>
        )}

        <div className=" inline-block">
          {cart.map((item) => {
            return (
              <div
                className="border border-gray-900 min-h-[250px] max-w-[70%] mx-auto my-4 flex flex-col 
            md:w-[100%]
            "
              >
                <div className="">
                  <img src={item.url} className=" w-[500px]" />
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
                  <div className="flex mx-auto">
                    <p>Quantity: &nbsp;</p>
                    <button
                      onClick={(e) =>
                        qtyHandler(e, item._id, "decrement", item.qty)
                      }
                      disabled={item.qty < 1}
                    >
                      <GrSubtractCircle />
                    </button>
                    <p>&nbsp;{item.qty}&nbsp;</p>
                    <button
                      onClick={(e) => qtyHandler(e, item._id, "increment")}
                    >
                      <GrAddCircle />
                    </button>
                  </div>
                  <div className="flex justify-between mx-2 text-lg my-1">
                    <button
                      className="border border-gray-800 rounded-lg px-1 hover:bg-slate-800 hover:text-zinc-100"
                      onClick={(e) => cartRemoveFunc(e, item._id)}
                    >
                      Remove from Cart
                    </button>
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
                          className="hover:text-rose-600 text-red-700 "
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {cart.length !== 0 && (
          <div className=" inline-block">
            <div className="border border-black-500 py-5 px-5 my-4 max-sm:max-w-[70%] mx-auto">
              <div>
                <p className="border border-b-2 text-lg">Price Details:</p>
              </div>
              <div className="my-2  w-[100%]">
                {cart.map((item) => {
                  return (
                    <div>
                      <div className="flex justify-around ">
                        <p>
                          {item.model}
                          <span>({item.qty})</span>
                        </p>
                        {/* <p>---</p> */}
                        <p>{item.qty * item.price}</p>
                      </div>
                    </div>
                  );
                })}
                <div className="flex justify-around my-2">
                  <p>Total Price:</p>
                  <p>
                    {cart.reduce(
                      (acc, curr) => (acc += curr.qty * curr.price),
                      0
                    )}
                  </p>
                </div>
                <div onClick={() => navigate("/checkout")}>
                  <button className="text-lg border border-gray-500 w-[100%] rounded-lg">
                    Checkout
                  </button>
                </div>
                {/* {cart.map((e)=>e.qty)} */}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
