import {useReducer , createContext , useContext} from 'react'
import { authReducer } from '../reducer/authReducer';

const AuthContext = createContext();
const getToken = () => localStorage.getItem("token");


const AuthContextProvider = ({children}) => {

const [authState , authDispatch] = useReducer(authReducer , {
  isAuthenticate : getToken() ? true : false ,
  user : JSON.parse(localStorage.getItem("user")),
  loading : false
})

return (
    <AuthContext.Provider value={{ authState , authDispatch }}>  
      {children}
    </AuthContext.Provider>
  )
}
const useAuth = () => useContext(AuthContext)
export {AuthContextProvider , useAuth}