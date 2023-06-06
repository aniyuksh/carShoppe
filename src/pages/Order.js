import React from "react";
import { useCart } from "../context/cartContext";

import Navbar from "../components/navbar";
import { Footer } from "../components/footer";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  function back() {
    setTimeout(() => {
      navigate("/");
    }, 750);
  }

  return (
    <>
      <Navbar />
      <div className="w-[full]">
        <div className="max-w-[80%] min-h-[70vh] m-auto">
          <div className="border border-red-200 m-14 text-2xl font-semibold items-center justify-center justify-items-center">
            <p>Order placed</p>
            {back()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;
