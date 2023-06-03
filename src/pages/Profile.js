import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useAuth } from "../context/auth-context";
import { useWish } from "../context/wishlistContext";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let details = JSON.parse(localStorage?.getItem("user"));
  const [toShow, setToShow] = useState("profile");
  const { authDispatch } = useAuth();
  const { setCart } = useCart();
  const { setWish } = useWish();
  const navigate = useNavigate();

  function logoutHandler() {
    localStorage?.removeItem("token");
    localStorage?.removeItem("user");
    authDispatch({ type: "User-logout" });
    setCart([]);
    setWish([]);
    navigate(-1);
  }

  return (
    <div>
      <Navbar />
      <section className="w-full flex justify-center">
        <div className="flex flex-col items-center min-w-[250px] w-[90%] max-w-[600px] mt-[2rem]">
          <div className="flex w-[100%]">
            <div
              className="w-[50%] bg-red-300"
              onClick={() => setToShow("profile")}
            >
              <button>Profile</button>
            </div>
            <div className="w-[50%]" onClick={() => setToShow("address")}>
              <button>Address</button>
            </div>
          </div>
          {toShow === "profile" ? (
            <div className=" w-[100%] border border-red-300 flex flex-col  p-10">
              <p>Firstname: {details?.firstName}</p>
              <p>Lastname: {details?.lastName}</p>
              <p>Email: {details?.email}</p>
              <button
                className="mt-[2rem] border border-gray-500 rounded-md px-2 hover:text-slate-50 hover:bg-gray-800"
                onClick={() => logoutHandler()}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="w-[100%] border border-red-300  flex">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, aut quam. Accusamus repellendus quae esse doloribus
                atque aspernatur facere neque delectus, aliquam non aut dicta
                veniam, hic labore asperiores accusantium. Natus a alias
                provident aliquam perspiciatis explicabo labore laudantium
                dolore blanditiis accusantium, officiis pariatur aliquid dicta
                veniam voluptatem praesentium eum.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Profile;

{
  /* <div className="flex flex-col justify-center items-center justify-items-center align-middle h-full">
          <div className="border border-gray-500  items-center justify-center justify-items-center flex flex-col align-middle max-w-lg px-2 py-2">
            <div className="flex justify-evenly w-full">
              <button
                className="border border-red-300 px-10 py-1"
                onClick={() => setToShow("profile")}
              >
                Profile
              </button>
              <button
                className="border border-red-300 px-10 py-1"
                onClick={() => setToShow("address")}
              >
                Address
              </button>
            </div>
            <div className="">
              {toShow === "profile" ? (
                <div className="flex flex-col justify-start items-start">
                  <p>Firstname:{details.firstName}</p>
                  <p>Lastname:{details.lastName}</p>
                  <p>Email:{details.email}</p>
                </div>
              ) : (
                <p>
                  2{details.firstName} {details.lastName} {details.email}
                </p>
              )}
            </div>
          </div>
          <button>logout</button>
        </div> */
}
