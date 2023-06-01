import axios from 'axios'
import React, {useContext , createContext , useState , useEffect} from 'react'
import { useAuth } from './auth-context';

const WishListContext = createContext();
const WishListContextProvider = ({children}) => {
    const {authState} = useAuth();
    const [wish , setWish] = useState([]);

    useEffect(()=>{
        try{
            if(authState.isAuth){
                let token = localStorage.getItem("token");
                (async () => {
                    const { data } = await axios.get(`/api/user/wishlist` , {
                        headers : {
                            authorization : token
                        }
                    })
                    setWish(data.wishlist);
                    console.log("wishlist context wishlistdata" , data.wishlist)
                })();
            }
            else{
                return ;
            }
        }
        catch(e){
            console.log("wishlist context error",e)
        }

    },[authState])


  return (
        <WishListContext.Provider value = {{setWish , wish}}>
            {children}
        </WishListContext.Provider>
  )
}

const useWish = () => useContext(WishListContext)

export  {WishListContextProvider , useWish}