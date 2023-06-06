import React, { useState } from "react";
import { useAddr } from "../context/addressContext";
import { useCart } from "../context/cartContext";
import Navbar from "../components/navbar";

const Checkout = () => {
  const { state } = useAddr();
  const { cart } = useCart();
  const [selected, setSelected] = useState(null);
  let totalPrice = cart.reduce((acc, curr) => (acc += Number(curr.price)), 0);

  return (
    <div className="w-[100%]">
      <Navbar />
      <p className="text-zinc-800 text-2xl mt-5">Checkout</p>
      <div className="max-w-[80%] border border-red-500 m-auto flex p-10 mt-5 justify-around">
        <div className=" w-[30%] ">
          <p className="font-semibold text-xl m-2">Addresses</p>
          <div className="flex flex-col ">
            <div className="flex flex-col">
              {state.map((a) => (
                <div className="flex">
                  <input
                    type="radio"
                    value={a}
                    checked={a === selected}
                    onChange={() => setSelected(a)}
                  />
                  <p>
                    {a.addressLine} -&nbsp;{a.city} ,{a.state} -&nbsp;{a.pin}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-red-500 w-[30%] p-4">
          <div>
            <p className=" text-xl font-semibold">Order Details</p>
          </div>

          <div className="flex justify-between font-semibold border border-gray-200 p-1">
            <p>{cart.length > 1 ? "Items" : "Item"}</p>
            <p>Qty</p>
          </div>
          <div className="flex justify-between ">
            <div>
              {cart.map((ele) => (
                <p>
                  {ele.model}-{ele.brand}
                </p>
              ))}
            </div>
            <div>
              {cart.map((ele) => (
                <p>{ele.qty}</p>
              ))}
            </div>
          </div>

          <div>
            <p className=" text-xl font-semibold ">Price Details</p>
            <div className="flex justify-between">
              <p>
                Price{" "}
                <span>
                  ({cart.length} {cart.length > 1 ? "items" : "item"})
                </span>
              </p>
              <p> &#8377;{totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p>Free Delivery</p>
              <p>&#8377;0</p>
            </div>
            <div className="flex justify-between">
              <p>Total Price</p>
              <p>{totalPrice}</p>
            </div>
          </div>

          {selected && (
            <div>
              <div>
                <p className=" text-xl font-semibold ">Deliver to</p>
              </div>
              <div>
                {selected && (
                  <p>
                    {selected.addressLine} -&nbsp;{selected.city} ,
                    {selected.state} -&nbsp;{selected.pin}
                  </p>
                )}
              </div>
            </div>
          )}
          <div className="border border-gray-400 rounded-xl font-semibold text-lg m-2">
            <button
              disabled={!selected}
              onClick={() => console.log("clickeds")}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
