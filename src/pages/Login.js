import React from 'react'
import Navbar from '../components/navbar'
import back from "../assets/hero-images/back.svg"
export const Login = () => {
  return (
    <>
    
    <Navbar />
    <div className='absolute'>
        <div className=''> 
            <img src={back} className=' w-[100vw]'/>
        </div>
        <div className=''>
            <form action="" className=' border border-yellow-100 w-[500px] h-[300px] justify-center items-center flex flex-col absolute top-[180px] left-10 text-white '>
                <div className>
                    <div className=' flex py-3'>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text"  className='rounded-md'/></div>
                    <div className='flex py-3 '>
                    Password &nbsp;&nbsp;
                    <input type="text" className='rounded-md'/>
                    </div>
                    <div className='flex justify-around  py-3'>
                    <button className='px-3 py-1 rounded-lg border border-gray-100'>Login</button>
                    <button className='px-3 py-1 rounded-lg border border-gray-100'>Login as Guest</button>
                    </div>
                </div>
                
               
            </form>
        </div>
    </div>
    </>
  )
}
