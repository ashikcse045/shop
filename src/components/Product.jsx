import Img from "./Img";
import MaterialIcon from "./MaterialIcon";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import ProductContext from "../contexts/ProductContext";
import axios from "axios";

const Product = () => {
  const {id, title, price, category, image, dispatch} = useContext(ProductContext);
  useEffect(() => {
    document.title = 'Home';
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    
    const deleteProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        if(res.status === 200) {
          dispatch({type: 'DELETE', productId: id});
        }
      } catch(e) {
        console.log(e);
      }
    }
    deleteProduct();
  }

  return (
    <div className="border border-gray-200">
      {/* <!-- image --> */}
      <div className="h-72 overflow-hidden flex items-center">
        <NavLink to={`/products/${id}`}>
          <Img url={image} />
        </NavLink>
      </div>
      {/* <!-- product description --> */}
      <div className="px-2 py-3 bg-white">
        <NavLink to={`/products/${id}`} className="block">
          <h1 className="text-xl hover:text-gray-700 transition-colors">
            {title}
          </h1>
        </NavLink>
        <NavLink to={`/categories/${category}`} className="block mt-3" >
          <p>{category}</p>
        </NavLink>
        <p className="mt-2 tracking-wider text-red-600">${price}</p>
        <ul className="flex flex-row justify-start space-x-4 mt-4">
          <li>
            <NavLink to="/">
              <MaterialIcon>edit</MaterialIcon>
            </NavLink>
          </li>
          <li>
            <button type="button" onClick={handleDelete}>
              <MaterialIcon>delete</MaterialIcon>
            </button>
          </li>
          <li>
            <button>
              <MaterialIcon>add_shopping_cart</MaterialIcon>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Product;
