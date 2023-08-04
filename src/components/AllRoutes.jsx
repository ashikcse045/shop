import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import Category from "./pages/Category";

const AllRoutes = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/category/:category" element={<Category />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </>
  );
};
export default AllRoutes;
