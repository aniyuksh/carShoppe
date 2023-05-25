import React, { useState } from "react";
import back from "../assets/hero-images/back.svg";
import Navbar from "../components/navbar";
import smlogin from "../assets/hero-images/smlogin.svg";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import axios from "axios";
const Signup = () => {
    
    // const navigate = useNavigate();
    const { authDispatch} = useAuth();
    const navigate = useNavigate();
    const [signUpData, setSignUpData] = useState({
        name: "",
        mobile: "",
        email: "",
        date : "",
        password: "",
      });

    
    async function postSignUpData(e){
        const {name , mobile , email , date, password} = signUpData;
        try{
            e.preventDefault();
            if(name && mobile && email && date && password !== ""){

                const resp = await axios.post("/api/auth/signup" , signUpData)
                if(resp.status === 200 || resp.status === 201){
                    localStorage.setItem("login" , JSON.stringify({
                        user : resp?.data?.createdUser,
                        token : resp?.data?.encodedToken
                    }));
                    authDispatch( { type : "User-pass" , payload : resp?.data?.createdUser})
                    localStorage.setItem("token", resp?.data?.encodedToken);
                    // localStorage.setItem("user", resp?.data?.createdUser);
                    // navigate("/");
                }
                
                    // localStorage.setItem("login" , data.createdUser);
                    // console.log(localStorage.getItem("login" , data.encodedToken));
                    // console.log();
            }
            else{

                alert("Enter valid Data")
            }
            
        }
        catch(e){
            alert(e);
        }
    }

  return (
    <>
      <Navbar />
      <div className="absolute">
        <div className="">
          <img src={back} className=" w-[100vw] h-[auto] max-sm:hidden" />
        </div>
        <div className="max-sm:h-[90vh] max-sm:top-0 max-sm:left-0 max-sm:relative">
          <img src={smlogin} className="  md:hidden" />
        </div>
        <h2
          className=" absolute top-[130px] left-[135px] py-2 text-zinc-100 text-3xl 
            
            max-sm:left-[155px] max-sm:top-[120px] max-sm:text-3xl"
        >
          Sign Up
        </h2>
        <form
          onSubmit={postSignUpData}
          className=" border border-yellow-100 w-[300px] h-[380px] justify-center items-center flex flex-col absolute top-[180px] left-10
            max-sm:top-[20vh]  max-sm:left-[55px] max-sm:bg-blend-overlay text-black"
        >
          <div>
            <div className=" flex py-3">
              <input
                type="text"
                className="rounded-md py-1 px-1"
                placeholder="Name"
                name = "name"
                value = {signUpData.name}
                onChange={(e)=> setSignUpData((prev)=> {
                    return { ...prev , name : e.target.value}
                })}
              />
            </div>
            <div className="flex py-3 ">
              <input
                type="text"
                className="rounded-md py-1 px-1"
                placeholder="Email"
                name = "email"
                value = {signUpData.email}
                onChange={(e)=> setSignUpData((prev)=> {
                    return { ...prev , email : e.target.value}
                })}
              />
            </div>
            <div className="flex py-3 ">
              <input
                type="text"
                className="rounded-md py-1 px-1"
                placeholder="Mobile Number"
                name = "mobile"
                value = {signUpData.mobile}
                onChange={(e)=> setSignUpData((prev)=> {
                    return { ...prev , mobile : e.target.value}
                })}
              />
            </div>
            <div className="flex py-3 ">
              <input
                type="date"
                className="rounded-md py-1 px-1 text-black"
                name = "date"
                value= {signUpData.date}
                onChange={(e)=> setSignUpData((prev)=> {
                    return { ...prev , date : e.target.value}
                })}
                
              />
            </div>
            <div className="flex py-3 ">
              <input
                type="password"
                className="rounded-md py-1 px-1"
                placeholder="Password"
                name = "password"
                value={signUpData.password}
                onChange={(e)=> setSignUpData((prev)=> {
                    return { ...prev , password : e.target.value}
                })}
              />
            </div>
            <div className="flex justify-start py-3">
              <button className="px-3 py-1 rounded-lg border border-gray-100 text-white">
                SignUp
              </button>
            </div>
            <p className="text-zinc-50">Have an Account? <Link to="/login"><span>Login</span></Link></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
