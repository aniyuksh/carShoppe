import axios from 'axios'
import React, { useEffect ,createContext, useContext, useReducer} from 'react'
import {  productReducer , initialState } from '../reducer/ProductReducer';

export const DataContext = createContext();

const ProductContext = ({children}) => {
    // const [productData , setProductData] = useState(null);
    // const [categoryData , setCategoryData] = useState(null);
    
    const [state , dispatch] = useReducer( productReducer , initialState);
    const getData = async() =>{
        try{
            const result = await axios.get('/api/products');
            if(result?.status === 200){
                
                dispatch({type : "setProductData" , payload: result?.data?.products})
                // setProductData(result?.data?.products)
            }
        }
        catch(e){
            console.log(e);
        }
    }

    const getCategoryData = async() => {
        try{
            const result = await axios.get('/api/categories');
            if(result.status === 200) {
                // setCategoryData(result?.data?.categories);
                dispatch({type : "setCategoryData" , payload : result?.data?.categories})
            }
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getData();
        getCategoryData();
    },[])
    // console.log("contextState" , state)
  return (
    <DataContext.Provider value={{productStateData : state}}>
        {children}
    </DataContext.Provider>
  )
}
export const useProductContext = () => useContext(DataContext);
export default ProductContext