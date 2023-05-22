import "./App.css";
import { NavLink } from "react-router-dom";
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
makeServer();
function App() {
  return (
    <div className="App">
      {/* <Landing />  */}
      {/* <Navbar />
      
      <Footer />
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Mockman /> */}
      {/* <ProductContext /> */}
      <Navbar />
      <ProductDisplay />
    </div>

  );
}

export default App;
