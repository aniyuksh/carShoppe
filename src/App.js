import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { ProductDisplay } from "./components/productDisplay";
import { Footer } from "./components/footer";
import { makeServer } from "./server";
import Landing from "./pages/Landing";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";
import Mockman from "mockman-js";
import ProductContext from "./context/ProductContext";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import WIshList from "./pages/WIshList";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RotatingLines } from "react-loader-spinner";

makeServer();
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productDisplay" element={<ProductDisplay />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/single/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WIshList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
