import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/navbar';
import { Footer } from '../components/footer';
import { useProductContext } from '../context/ProductContext';
const SingleProduct = () => {
    const {id} = useParams();
    console.log("typeof" ,typeof id)

    const [clickedData , setClickedData] = useState(null);
    const {productStateData }= useProductContext();
    const {productData} = productStateData;
    const data = productData.flat(1);
   
    useEffect(()=>{
        // setClickedData(data?.find((ele)=>ele?._id === id))
        setClickedData(data?.find(({ _id }) => _id === id));
    },[id , data])

 
  return (
    <div>
        <Navbar /> 
        <section>
            <div>

            </div>
        </section>
        <Footer />


        
    </div>
  )
}

export default SingleProduct