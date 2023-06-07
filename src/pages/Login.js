import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import back from "../assets/hero-images/back.svg";
import smlogin from "../assets/hero-images/smlogin.svg";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { users } from "../backend/db/users";
import { toast } from "react-toastify";
import { Footer } from "../components/footer";

export const Login = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = users[0];

  async function testLoginHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: "adarshbalika@gmail.com",
          password: "adarshbalika",
        }),
      });
      const nres = await res.json();
      if (res.statusText === "OK") {
        authDispatch({ type: "User-pass", payload: nres?.foundUser });
        localStorage.setItem("token", nres.encodedToken);
        localStorage.setItem("user", JSON.stringify(nres?.foundUser));
        navigate("/productDisplay");
        toast.success("Login succesfull");
      }
    } catch (e) {
      alert(e);
      authDispatch({ type: "User-fail" });
    }
  }

  async function loginHandler(e) {
    const { email, password } = loginData;

    e.preventDefault();
    try {
      const n = { email: email, password: password };
      const res = await axios.post("/api/auth/login", { email, password });

      if (res.statusText === "OK") {
        authDispatch({ type: "User-pass", payload: res?.data?.foundUser });
        localStorage.setItem("token", res.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(res?.data.foundUser));

        navigate("/productDisplay");
        toast.success("Login succesfull");
      }
    } catch (e) {
      console.log(e);
      authDispatch({ type: "User-fail" });
    }
  }
  return (
    <>
      <div className="flex flex-col justify-start min-h-[100vh] items-center mx-auto border bg-slate-200">
        <Link to="/">
          <p className="text-6xl font-bold text-blue-600 mb-[2rem] cursor-pointer">
            carShoppe
          </p>
        </Link>
        <div className="self-center">
          <p className="text-3xl font-semibold text-black mb-[1rem] text-center">
            Login
          </p>
          <form
            className="flex flex-col gap-5 bg-slate-700 mx-auto bg-inherit border-[1px] border-black text-white rounded-md px-10 py-10"
            onSubmit={loginHandler}
          >
            {/* <div>
              <input
                type="email"
                placeholder="Email"
                className="h-10 w-72 rounded-md p-2"
              />
            </div> */}
            <div>
              <input
                type="text"
                className="h-10 w-72 rounded-md p-2 text-black"
                placeholder="Email"
                name="email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
              />
            </div>
            <div>
              <input
                type="text"
                className="h-10 w-72 rounded-md p-2 text-black"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
              />
            </div>
            <div className="flex justify-around">
              <button
                className="bg-green-600 border-[2px] border-green-600   hover:bg-green-500 px-3 py-2 w-72 rounded-md font-semibold"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="flex justify-around">
              <button
                className="border-[2px] border-slate-400 px-3 py-2 w-72 rounded-md font-semibold hover:border-slate-100"
                onClick={(e) => testLoginHandler(e, email, password)}
              >
                Login as Guest
              </button>
            </div>
            <div>
              <p className="text-center text-lg">
                {" "}
                Don't have an account?{" "}
                <span className="text-blue-400 font-semibold">
                  <NavLink to={"/signup"}>Signup </NavLink>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
