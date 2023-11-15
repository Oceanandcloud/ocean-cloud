import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import CartPage from "./Pages/Cart/CartPage";
import Hero from "./Pages/Hero/Hero";
import Product from "./Pages/Product/Product";
import {BrowserRouter as Router, Route, Routes, Outlet} from "react-router-dom";
import Contact from "./Pages/Contact/Contact";



function App() {
  
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/productpage" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} /> 
        </Routes>
        <Footer />
        </Router>
    </>
  );
}

export default App;
