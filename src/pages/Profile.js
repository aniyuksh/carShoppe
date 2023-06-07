import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useAuth } from "../context/auth-context";
import { useWish } from "../context/wishlistContext";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import { useAddr } from "../context/addressContext";
import AddressForm from "../components/AddressForm";

const Profile = () => {
  let details = JSON.parse(localStorage?.getItem("user"));
  const [toShow, setToShow] = useState("profile");
  const { authDispatch } = useAuth();
  const { setCart } = useCart();
  const { setWish } = useWish();
  const navigate = useNavigate();
  const { state, dispatch } = useAddr();
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  console.log("profile", details);
  function logoutHandler() {
    localStorage?.removeItem("token");
    localStorage?.removeItem("user");
    authDispatch({ type: "User-logout" });
    setCart([]);
    setWish([]);
    navigate(-1);
  }

  function deleteAdd(id) {
    dispatch({ type: "remove-addr", payload: id });
  }

  function editAdrr(item) {
    setShowForm((prev) => !prev);
    setEditItem(item);
  }

  return (
    <div>
      <Navbar />
      <section className="w-full flex justify-center">
        <div className="flex flex-col items-center min-w-[250px] w-[90%] max-w-[600px] mt-[2rem]">
          <div className="flex w-[100%] text-center">
            <div
              className={
                toShow === "profile" ? "w-[50%] bg-blue-300 " : "w-[50%] "
              }
              onClick={() => setToShow("profile")}
            >
              <button className="">Profile</button>
            </div>
            <div
              className={
                toShow === "address" ? "w-[50%] bg-blue-300 " : "w-[50%] "
              }
              onClick={() => setToShow("address")}
            >
              <button>Address</button>
            </div>
          </div>
          {toShow === "profile" ? (
            <div className=" w-[100%] border-[2px] border-red-300 flex flex-col text-center  p-10">
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
            <div className="w-[100%] border-[2px] border-red-300  flex flex-col p-10">
              {state.map((item) => {
                return (
                  <div className="flex flex-col  items-center w-[100%]">
                    <p>Name: {item.name}</p>
                    <p>Mobile: {item.phone}</p>
                    <p>
                      City: {item.city} - {item.pin}
                    </p>
                    <p>Address: {item.addressLine} </p>
                    <div className="flex w-[100%] justify-evenly">
                      <button
                        onClick={() => editAdrr(item)}
                        className="border border-gray-500 p-1 w-[25%] rounded-2xl"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteAdd(item.id)}
                        className="border border-gray-500 p-1 w-[25%] rounded-2xl"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
              <button
                onClick={() => setShowForm((prev) => !prev)}
                className="border border-gray-500 m-2"
              >
                Add Address+
              </button>
            </div>
          )}
          <section className="w-[100%] mt-2 ">
            {showForm && (
              <AddressForm
                item={editItem}
                setShowForm={setShowForm}
                setEditItem={setEditItem}
              />
            )}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Profile;
