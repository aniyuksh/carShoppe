import axios from 'axios'
import React, { useEffect , useState ,createContext, useContext} from 'react'


export const DataContext = createContext();

const ProductContext = ({children}) => {
    const [productData , setProductData] = useState(null);
    const [categoryData , setCategoryData] = useState(null);
    
    const getData = async() =>{
        try{
            const result = await axios.get('/api/products');
            if(result?.status === 200){
                setProductData(result?.data?.products)
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
                setCategoryData(result?.data?.categories);
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
    
  return (
    <DataContext.Provider value={{productData , categoryData}}>
        {children}
    </DataContext.Provider>
  )
}
export const useProductContext = () => useContext(DataContext);
export default ProductContext