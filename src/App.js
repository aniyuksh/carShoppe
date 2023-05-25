import "./App.css";
import { NavLink , Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { ProductDisplay } from "./components/productDisplay";
import { Footer } from "./components/footer";
import {makeServer} from "./server";
import Landing from "./pages/Landing";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";
import Mockman from "mockman-js"
import ProductContext from "./context/ProductContext";
import SingleProduct from "./pages/SingleProduct";
makeServer();
function App() {
  return (
    <div className="App">
      {/* <Landing />  */}
      {/* <Navbar />
      
      <Footer />
      
      // <Signup /> 
      {/* <Mockman /> */}
      {/* <ProductContext /> */}
      {/* <Navbar />
      <ProductDisplay /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Mockman /> */}
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/productDisplay" element={<ProductDisplay />}/>
        <Route path="/mockman" element={<Mockman />}/>
        <Route path="/single/:id" element={<SingleProduct />}/>

      </Routes>
    </div>

  );
}

export default App;
