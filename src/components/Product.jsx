import Img from "./Img";
import MaterialIcon from "./MaterialIcon";
import { NavLink } from "react-router-dom";

const Product = () => {
  return (
    <div className="border border-gray-200">
      {/* <!-- image --> */}
      <div className="h-72 overflow-hidden flex items-center">
        <Img url='https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' />
      </div>
      {/* <!-- product description --> */}
      <div className="px-2 py-3 bg-white">
        <NavLink to="/" className="block">
          <h1 className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            quis!
          </h1>
        </NavLink>
        <p className="mt-2 tracking-wider text-red-600">$120</p>
        <ul className="flex flex-row justify-start space-x-4 mt-4">
          <li>
            <NavLink to="/">
              <MaterialIcon>edit</MaterialIcon>
            </NavLink>
          </li>
          <li>
            <button>
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
