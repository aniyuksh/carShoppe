import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  let token = localStorage?.getItem("token");
  return (
    <footer className=" bg-gray-800 text-zinc-200 flex flex-col pt-3 pb-2">
      <section className="flex flex-col  items-center md:flex-row w-[100vw] max-sm:flex-wrap ">
        <section className="flex flex-col justify-center items-center w-[40%] max-sm:flex-wrap">
          <p className="pt-3 pb-2 max-sm:w-[100%] max-sm:text-left md:w-[60%] md:text-left">
            Address: Xyz,
            <br />
            Block - 1 , Kaali Pahadi, <br />
            Gokuldham Society, <br />
            Goregaon East - 123456. Contact - 099999999
          </p>
        </section>
        <section className="flex  w-[80%] items-center justify-evenly max-sm:flex-wrap">
          <section className="flex flex-col text-justify">
            <h1 className="mb-2">About Us</h1>
            <NavLink>Privacy</NavLink>
            <NavLink>Careers</NavLink>
            <NavLink>Contact Us</NavLink>
            <NavLink>For Business</NavLink>
          </section>
          <section className="flex flex-col text-justify ">
            <h1 className="mb-2">Navigation:</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/productDisplay">Explore</NavLink>
            <NavLink to={token ? "/cart" : "/login"}>Cart</NavLink>
            <NavLink to={token ? "/wishlist" : "/login"}>Wishlist</NavLink>
          </section>
          <div className="flex max-sm:pb-1 pb-3 gap-3 flex-col justify-center max-sm:flex-row ">
            <FaTwitter size={30} />
            <FaGithub size={30} />
            <FaLinkedin size={30} />
          </div>
        </section>

        <section className="flex pb-3 flex-col ">
          {/* <p className="flex justify-center max-sm:pb-3 md:pb-3 text-xl">
          Made with &nbsp;
          <span className="flex items-center">
            <FaReact size={20} /> &nbsp;
            <SiTailwindcss size={20} />
          </span>
        </p> */}
        </section>
      </section>
    </footer>
  );
};
