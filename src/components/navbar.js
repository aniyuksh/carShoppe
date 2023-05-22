import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineMenu , AiOutlineClose} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import {useFilterContext} from "../context/FilterContext"; 

const Navbar = () => {
  const [navOpen , setNavOpen] = useState(false);
  const [searchOpen , setSearchOpen] = useState(false);
  const {dispatch} = useFilterContext();
  const navOpenHandler = () =>{
      setNavOpen((prev)=>!prev)
  }

  const searchOpenHandler = () =>{
    setSearchOpen((prev)=>!prev)
}

let a = 'border border-gray-500 rounded-md text-center w-[30%] h-8 md:flex justify-end';
if(searchOpen){
  a += ' hidden' 
}
console.log(navOpen)
  return (
    <div className='flex justify-between items-center h-12 max-w-[1980px] px-1 mx-auto text-zinc-600 sticky top-0 bg-white z-10' >
        <h1 className='text-3xl font-semibold'>carShoppe</h1>
        <input type="text" placeholder='Search Items...' onChange={(e) => dispatch({type : "filterSearch" , payload : e.target.value })}
        className={a} />
        <div onClick={searchOpenHandler} className='md:hidden'>
           <BsSearch size={20}/>
        </div>
        <ul className='hidden max-md:flex max-md:gap-3 '>
           <li><NavLink>Cart</NavLink></li>
          <li><NavLink>Profile</NavLink></li>
        </ul>
        
        
        <ul className=' hidden md:flex gap-8 px-3 ' >
          {/* <BsSearch size={20} /> */}
          <li><NavLink>Explore</NavLink></li>
          <li><NavLink>Wishlist</NavLink></li>
          <li><NavLink>Cart</NavLink></li>
          <li><NavLink>Profile</NavLink></li>
        </ul>
        <div onClick={navOpenHandler} className='md:hidden'>
          { navOpen ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20} />}
         
        </div>
        <div className={!navOpen ? ' fixed left-[-100%]' : 'fixed left-0 top-11 w-[90%]  h-screen bg-white text-left ease-in-out duration-500'}>

          <ul className='pt-20 uppercase px-3'>
          <li className='border-b border-gray-150 pb-3'><NavLink>Explore</NavLink></li>
          <li className='border-b border-gray-150 pb-3'><NavLink>Wishlist</NavLink></li>
         
          </ul>
        </div>
    </div>
  )
}

export default Navbar



 {/* <h2  style={{ display:"inline-block" }} >Logo</h2>
        <input placeholder='Search'/>
        <NavLink>Products</NavLink>
        <NavLink>Login</NavLink> */}