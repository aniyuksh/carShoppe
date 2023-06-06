import React, { useState } from "react";
import { useAddr } from "../context/addressContext";
import { useCart } from "../context/cartContext";
import Navbar from "../components/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddressForm from "../components/AddressForm";

const Checkout = () => {
  const { state } = useAddr();
  const { cart, setCart } = useCart();
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  let totalPrice = cart.reduce((acc, curr) => (acc += Number(curr.price)), 0);

  async function cartRemoveFunc(id) {
    let token = localStorage?.getItem("token");
    // e.preventDefault();
    try {
      const { data } = await axios.delete(`/api/user/cart/${id}`, {
        headers: {
          authorization: token,
        },
      });
      setCart(data.cart);
    } catch (err) {
      console.log("cart removal error", err);
    }
  }

  function handleOrder(e) {
    e.preventDefault();

    cart.map((ele) => cartRemoveFunc(ele._id));
    navigate("/order");
  }

  return (
    <div className="w-[100%]">
      <Navbar />
      <p className="text-zinc-800 text-2xl mt-5">Checkout</p>
      <div className="max-w-[80%] border border-gray-500 m-auto flex p-10 mt-5 justify-around">
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
          <div>
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className="border border-gray-500 m-2 p-2 rounded-xl"
            >
              Add Address+
            </button>

            <section>
              {showForm && <AddressForm setShowForm={setShowForm} />}
            </section>
          </div>
        </div>
        <div className="border border-gray-500 w-[30%] p-4">
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
            <button disabled={!selected} onClick={(e) => handleOrder(e)}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
