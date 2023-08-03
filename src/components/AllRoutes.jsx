import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";

const AllRoutes = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};
export default AllRoutes;
