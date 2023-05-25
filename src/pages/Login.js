import axios from "axios";
import React , {useState} from "react";
import Navbar from "../components/navbar";
import back from "../assets/hero-images/back.svg";
import smlogin from "../assets/hero-images/smlogin.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { users } from "../backend/db/users";


export const Login = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email : "" ,
    password : ""
  })
  const {email, password} = users[0];
  

  // async function testLoginHandler(e){
  //   const {email , password} = e;
  //   e.preventDefault();
  //   console.log("came")
  //  try{
      // const res = await axios.post("/api/auth/login", { email, password })
      // console.log(res);
      // if(res?.status === 200 || res?.status === 201){
        // authDispatch({type : "User-pass" , payload : res?.data?.foundUser})
        // localStorage.setItem("token", res?.data?.encodedToken);
        // localStorage.setItem("user", JSON.stringify(res?.data.foundUser));
        // navigate(-1);
        // console.log("succccccccc");
        // const res = await loginServices('adarshbalak@gmail.com', 'adarshBalaki123');
        // console.log("res",res)
      // }
  //  }
  //  catch(e){
    // alert(e);
    // authDispatch({ type : "User-fail" });
  //  }
  // }

  // async function test(e){
  //   e.preventDefault();
  //   const res = await axios.post("/api/auth/login" , {
  //     email , password
  //   })
  //   console.log(res);
  // }

  async function testLoginHandler(e , email , password){
    e.preventDefault();
    try{
      const res = await axios.post("/api/auth/login" , {
        email , password
      });
      console.log("res" , res)
      if(res.statusText === "OK"){
        authDispatch({type : "User-pass" , payload : res?.data?.foundUser})
        localStorage.setItem("token" , res.data.encodedToken)
        localStorage.setItem("user", JSON.stringify(res?.data.foundUser));
        console.log("succccccccccccccc");
      }
    }
    catch(e){
      alert(e);
      authDispatch({ type : "User-fail" });
    }
  }

  async function loginHandler(e){
    // console.log("Came");
    const {email , password} = loginData;
    // console.log("logindata" , loginData);
    e.preventDefault();
    try{
      const n = {email : email , password : password}
      // const res = await fetch("/api/auth/login" , {
      //   method : "POST",
      //   body : JSON.stringify(n)
      // });
      const res = await axios.post("/api/auth/login" , {email , password})
      console.log("res" , res);
      if(res.statusText === "OK"){
        authDispatch({type : "User-pass" , payload : res?.data?.foundUser})
        localStorage.setItem("token" , res.data.encodedToken)
        localStorage.setItem("user", JSON.stringify(res?.data.foundUser));
        console.log("succccccccccccccc");
      }
    }

    catch(e){
      console.log(e);
      authDispatch({type : "User-fail" })
    }

  }


  return (
    <>
      <Navbar />
      <div className="absolute">
        <div className="overflow-y-hidden overflow-hidden">
          <img src={back} className=" w-[100vw] h-[auto] max-sm:hidden" />
        </div>
        <div className="max-sm:h-[90vh] max-sm:top-0 max-sm:left-0 max-sm:relative">
          <img src={smlogin} className="  md:hidden" />
        </div>
        <div>
          <h2
            className=" absolute top-[180px] left-[135px] py-2 text-zinc-100 text-3xl
            max-sm:left-[185px] max-sm:top-[200px] max-sm:text-3xl"
          >
            Login
          </h2>
          <form
            onSubmit={loginHandler}
            className=" border border-yellow-100 w-[300px] h-[300px] justify-center items-center flex flex-col absolute top-[180px] left-10 text-black
            max-sm:top-[25vh]  max-sm:left-[55px] max-sm:bg-blend-overlay"
          >
            <div className>
              <div className=" flex py-3">
                <input
                  type="text"
                  className="rounded-md py-1 px-1"
                  placeholder="Email"
                  name = "email"
                  value= {loginData.email}
                  // onChange={(e)=>setLoginData((prev)=>{ ...prev, email : e.target.value})}
                  onChange={(e)=>setLoginData((prev)=>{
                    return ({...prev , email : e.target.value})
                  })
                  }
                />
              </div>
              <div className="flex py-3 ">
                <input
                  type="text"
                  className="rounded-md py-1 px-1"
                  placeholder="Password"
                  name = "password"
                  value = {loginData.password}
                  // onChange={(e)=>setLoginData((prev)=>{...prev, password : e.target.value})}
                  // onChange={(e)=>setLoginData((prev)=>{
                  //   return ({...prev , password : e.target.value})
                  // })
                  onChange={(e)=>setLoginData((prev)=>{
                    return (
                      {...prev , password : e.target.value}
                    )
                  })}
                />
              </div>
              <div className="flex justify-start py-3">
                <button type="submit" className="px-3 py-1 rounded-lg border border-gray-100 text-white">
                  Login
                </button>
                <button className="px-3 py-1 rounded-lg border border-gray-100 text-white" 
                onClick={(e)=>testLoginHandler(e , email , password)}
                >
                  Login as Guest
                </button>
                
              </div>
              <p>Dont have an account? <span><NavLink>Signup</NavLink></span></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
