import Img from "./Img";
import MaterialIcon from "./MaterialIcon";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import ProductContext from "../contexts/ProductContext";
import axios from "axios";
import UpdateProduct from "./UpdateProduct ";

const Product = () => {
  const { id, title, price, category, image, description, dispatch } =
    useContext(ProductContext);

  const [updateBox, setUpdateBox] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();

    const deleteProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        if (res.status === 200) {
          dispatch({ type: "DELETE", productId: id });
        }
      } catch (e) {
        console.log(e);
      }
    };
    deleteProduct();
  };

  const showUpdateBox = (e) => {
    e.preventDefault();
    setUpdateBox(true);
  };

  const hideUpdateBox = (e) => {
    // e.preventDefault();
    if (e.target.id === "updateContainer" || e.target.id === "closeBtn") {
      setUpdateBox(false);
    }
  };

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
        <NavLink to={`/products/category/${category}`} className="block mt-3">
          <p>{category}</p>
        </NavLink>
        <p className="mt-2 tracking-wider text-red-600">${price}</p>
        <ul className="flex flex-row justify-start space-x-4 mt-4">
          <li>
            <button type="button" onClick={showUpdateBox}>
              <MaterialIcon>edit</MaterialIcon>
            </button>
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

      <UpdateProduct visible={updateBox} hideBox={hideUpdateBox} productDetails={{id, title, price, category, image, description}} dispatch={dispatch} />
    </div>
  );
};
export default Product;
