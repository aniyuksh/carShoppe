import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/navbar';
import { Footer } from '../components/footer';
import { useProductContext } from '../context/ProductContext';
import {GiVibratingShield} from "react-icons/gi"
import {BsBookmarkPlus} from "react-icons/bs"
import { useCart } from '../context/cartContext';
import axios from 'axios';


const SingleProduct = () => {
    const {id} = useParams();
    console.log("typeof" ,typeof id)
    const navigate = useNavigate();
    const [clickedData , setClickedData] = useState([]);
    const {productStateData }= useProductContext();
    const {productData} = productStateData;
    const data = productData.flat(1);
    let token = localStorage.getItem("token");
    const  { cart, setCart} = useCart();
    
    useEffect(()=>{
        setClickedData(data?.find(({ _id }) => _id === id));
    },[id , data])
    

    async function addToCart(prod) {
        if (cart.find((item) => item._id === prod._id)) {
            console.warn("Item is Already present in cart");
            return;
          }
            try{
                const {data} = await axios.post("/api/user/cart" , 
                    {product : {...prod, qty:1}},{
                        headers : {
                            authorization : token
                        }
                    }
                    
                )
                setCart(data.cart);
                // console.log("DATATOCART", data.cart);
                // navigate("/cart");
                    }
            catch(e){
                console.log("ADDTOCARTERROR", e)
            }
    
    
    
    
        //   try {
        //     const resp = await fetch(
        //       "/api/user/cart", {
        //         method : "POST", 
        //             headers: {
        //               authorization: token,
        //             },
        //         body : JSON.stringify({ product : prod })
        //       }
        //     //   { prod }
              
        //     );
        //     const {cart} = await resp.json()
        //     console.log("DATA", cart);
        //     setCart(cart);
        //     console.log("ADDTOCARTFUNC",cart)
        //     navigate("/cart");
        //   } catch (err) {
        //     console.log(err);
        //   }
     }





 
  return (
    <div>
        <Navbar /> 
        <section className='min-h-[70vh] my-3 flex flex-col justify-center m-auto item max-w-[50%] text-zinc-800 ' >
            <div className='flex border border-gray-400 my-3 h-[50vh] items-center'>
                <div className='flex justify-center h-[100%]'>
                    <img src={clickedData?.url} />
                </div>

                <div className='max-w-[50%]'>
                   <div className='h-[50vh]'>
                    
                   <p className='justify-start items-start flex text-4xl my-3'>
                   
                   
                        {clickedData?.model} ---  {clickedData?.brand}
                    </p>
                   <p className='justify-start items-start flex text-2xl my-3'>
                        {clickedData?.categoryName} |  <GiVibratingShield size={15} className='justify-center mt-1 relative top-2'/>
                        {clickedData?.ncap}
                    </p>
                    <p className='flex text-xl my-2'>
                    <span>&#8377;</span>{clickedData?.price}
                       
                    </p>
                    <p className='flex text-lg my-2'>
                    <span className='text-md font-semibold'>Fuel Type: &nbsp;</span> {clickedData?.fueltype}
                    </p>
                    <p className='flex justify-start items-start justify-items-start
                    '> <span className='text-md font-semibold'>Desc:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius doloremque inventore, minus quas molestias?</p>
                    <div className='flex justify-evenly'>

                    {/* <button className='border border-gray-600 rounded-lg py-1 px-2 my-2'>Add to Cart</button> */}
                {cart.some((car)=>car._id === clickedData._id) ? (
                
                <button className='border border-gray-700 rounded-md px-2 hover:text-slate-50 hover:bg-gray-800'
                onClick={()=>{
                    token ? navigate("/cart") : navigate("/login");
                }}
                >
                    Go to Cart
                </button>

            ) : (
                

                <button className='border border-gray-700 rounded-md px-2 hover:text-slate-50 hover:bg-gray-800'
                onClick={()=>{
                    token ? addToCart(clickedData) : navigate("/login");
                }}
                >
                    Add to Cart
                </button>

            )}

                    <BsBookmarkPlus className='text-2xl relative top-[12px] mx-[2px] cursor-pointer hover:text-rose-500'/>
                    </div>
                    
                   </div>
                </div>
            </div>
            













{/*             
            <div className='border border-red-800 h-auto my-3'>
                <img src={clickedData.url}/>
               
            </div>
            <div className='border border-red-800 h-auto my-3'>
                <img src={clickedData.url}/>
               
            </div>
            <div className='border border-red-800 h-auto my-3'>
                <img src={clickedData.url}/>
               
            </div> */}
        </section>
        <Footer />


        
    </div>
  )
}

export default SingleProduct