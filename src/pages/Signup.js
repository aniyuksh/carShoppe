import React, { useState } from "react";
import back from "../assets/hero-images/back.svg";
import Navbar from "../components/navbar";
import smlogin from "../assets/hero-images/smlogin.svg";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import { Footer } from "../components/footer";
const Signup = () => {
  // const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    email: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  async function postSignUpData(e) {
    const { firstName, email, lastName, password, confirmPassword } =
      signUpData;
    try {
      e.preventDefault();
      if (
        firstName &&
        email &&
        lastName &&
        password &&
        confirmPassword !== ""
      ) {
        if (password === confirmPassword) {
          {
            const resp = await axios.post("/api/auth/signup", signUpData);
            if (resp.status === 200 || resp.status === 201) {
              localStorage.setItem(
                "login",
                JSON.stringify({
                  user: resp?.data?.createdUser,
                  token: resp?.data?.encodedToken,
                })
              );
              authDispatch({
                type: "User-pass",
                payload: resp?.data?.createdUser,
              });
              localStorage.setItem("token", resp?.data?.encodedToken);
              navigate("/login");
            }
          }
        } else {
          toast.warn("Password Mismatch");
        }
      } else {
        toast.warn("Enter proper data");
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center  items-center  mx-auto border bg-slate-200">
        <Link to="/">
          <p className="text-6xl font-bold text-blue-600 cursor-pointer mb-[2rem]">
            carShoppe
          </p>
        </Link>
        <div>
          <p className="text-3xl font-semibold text-black text-center mb-[1rem]">
            Signup
          </p>
          <form
            className="flex flex-col gap-5 bg-slate-700 mx-auto bg-inherit border-[1px] border-black text-black rounded-md pr-10 pl-14 py-10 "
            onSubmit={postSignUpData}
          >
            <div>
              <input
                type="text"
                className="h-10 w-72 rounded-md p-2"
                placeholder="FirstName"
                name="name"
                value={signUpData.firstName}
                onChange={(e) =>
                  setSignUpData((prev) => {
                    return { ...prev, firstName: e.target.value };
                  })
                }
              />
            </div>
            <div>
              <input
                type="text"
                className="h-10 w-72 rounded-md p-2"
                name="lastName"
                placeholder="LastName"
                value={signUpData.lastName}
                onChange={(e) =>
                  setSignUpData((prev) => {
                    return { ...prev, lastName: e.target.value };
                  })
                }
              />
            </div>
            <div>
              <input
                type="text"
                className="h-10 w-72 rounded-md p-2"
                placeholder="Email"
                name="email"
                value={signUpData.email}
                onChange={(e) =>
                  setSignUpData((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
              />
            </div>
            {/* <div>
              <input
                type="text"
                className="h-10 w-72 rounded-md p-2"
                placeholder="Mobile Number"
                name="mobile"
                value={signUpData.mobile}
                onChange={(e) =>
                  setSignUpData((prev) => {
                    return { ...prev, mobile: e.target.value };
                  })
                }
              />
            </div> */}
            <div>
              <div className="flex">
                <input
                  type={showPass ? "text" : "password"}
                  className="h-10 w-72 rounded-md p-2 "
                  placeholder="Password"
                  name="password"
                  value={signUpData.password}
                  onChange={(e) =>
                    setSignUpData((prev) => {
                      return { ...prev, password: e.target.value };
                    })
                  }
                />
                <div
                  className=" relative right-5 top-2 text-black"
                  onClick={() => setShowPass((prev) => !prev)}
                >
                  <AiOutlineEye size={20} />
                </div>
              </div>
            </div>

            <div>
              <div className="flex">
                <input
                  type={showConfirmPass ? "text" : "password"}
                  className="h-10 w-72 rounded-md p-2"
                  placeholder="Confirm Password"
                  name="confirm password"
                  value={signUpData.confirmPassword}
                  onChange={(e) =>
                    setSignUpData((prev) => {
                      return { ...prev, confirmPassword: e.target.value };
                    })
                  }
                />
                <div
                  className=" relative right-5 top-2 text-black"
                  onClick={() => setShowConfirmPass((prev) => !prev)}
                >
                  <AiOutlineEye size={20} />
                </div>
              </div>
            </div>

            <div className="flex">
              <button className="bg-green-600 border-[2px] border-green-600   hover:bg-green-500 px-3 py-2 w-72 rounded-md font-semibold">
                Signup
              </button>
            </div>

            <div>
              <p className="text-center text-lg">
                {" "}
                Already a user?{" "}
                <span className="text-blue-400 font-semibold">
                  <NavLink to={"/login"}>Login </NavLink>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
