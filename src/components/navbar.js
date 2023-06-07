import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useFilterContext } from "../context/FilterContext";
import { useAuth } from "../context/auth-context";
import { useWish } from "../context/wishlistContext";
import { useCart } from "../context/cartContext";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const { cart } = useCart();
  const { wish } = useWish();
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useFilterContext();
  const navOpenHandler = () => {
    setNavOpen((prev) => !prev);
  };

  const searchOpenHandler = () => {
    setSearchOpen((prev) => !prev);
  };

  let a =
    "border border-gray-500 rounded-md text-center w-[30%] h-8 md:flex justify-end";
  if (searchOpen) {
    a += " hidden";
  }
  let token = localStorage?.getItem("token");

  return (
    <div className="flex justify-between items-center h-[10vh]  w-[100vw] px-7   bg-blue-900 text-white z-10 backdrop-filter backdrop-blur-lg ">
      <h1
        className="text-3xl font-semibold cursor-pointer"
        onClick={() => navigate("/")}
      >
        carShoppe
      </h1>
      <input
        type="search"
        placeholder="Search Items..."
        onChange={(e) =>
          dispatch({ type: "filterSearch", payload: e.target.value })
        }
        className={a}
        onKeyDown={(event) =>
          event.key === "Enter" && navigate("/productDisplay")
        }
      />

      {/* <ul className="hidden max-md:flex max-md:gap-3 "></ul> */}

      <ul className=" hidden md:flex gap-8 px-3 ">
        {/* <BsSearch size={20} /> */}
        <li>
          <NavLink to="/productDisplay">Explore</NavLink>
        </li>
        <li>
          <NavLink to={token ? "/wishlist" : "/login"}>
            Wishlist
            <span className={wish.length > 0 ? "" : "hidden"}>
              ({wish.length})
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to={token ? "/cart" : "/login"}>
            Cart{" "}
            <span className={cart.length > 0 ? "" : "hidden"}>
              ({cart.length})
            </span>
          </NavLink>
        </li>
        <li>
          {token ? (
            <NavLink to="/profile">Profile</NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
      </ul>
      <div className="md:hidden flex">
        <BsSearch
          size={20}
          className="md:hidden mx-2"
          onClick={searchOpenHandler}
        />
        <span onClick={navOpenHandler}>
          {navOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </span>
      </div>
      <div
        className={
          !navOpen
            ? " fixed left-[-100%]"
            : "fixed left-0 top-11 w-[90%]  h-screen bg-white text-left ease-in-out duration-500"
        }
      >
        <ul className="pt-20 uppercase px-3">
          <Link to="/productDisplay">
            <li className="border-b border-gray-150 pb-3">
              <NavLink to="/productDisplay">Explore</NavLink>
            </li>
          </Link>
          <Link to="/cart">
            <li className="border-b border-gray-150 pb-3">
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </Link>
          <Link to="/wishlist">
            <li className="border-b border-gray-150 pb-3">
              <NavLink to="/wishlist">Wishlist</NavLink>
            </li>
          </Link>

          <li className="border-b border-gray-150 pb-3">
            {token ? (
              <NavLink to="/profile">Profile</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
