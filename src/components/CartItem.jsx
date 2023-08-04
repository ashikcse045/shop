/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Img from "./Img";

const CartItem = ({ products, productId, quantity, dispatch }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    document.title = "Cart";
  });

  useEffect(() => {
    products.forEach((e) => {
      if (e.id === productId) {
        setProduct(e);
      }
    });
  }, [products, productId]);

  const increment = (e) => {
    e.preventDefault();
    dispatch({
      type: "INCREMENT_CART",
      productId: productId,
    });
  };

  const decrement = (e) => {
    e.preventDefault();
    dispatch({
      type: "DECREMENT_CART",
      productId: productId,
    });
  };

  return (
    <div className="w-full h-28 flex flex-row items-center space-x-10">
      {/* <!-- image --> */}
      <div className="w-28 h-28 border border-gray-500 box-border flex items-center overflow-hidden">
        <Img url={product.image} />
      </div>

      {/* <!-- details --> */}
      <div className="w-1/2">
        <h1 className="text-xl font-semibold">{product.title}</h1>
      </div>
      {/* <!-- quantity --> */}
      <div className="w-1/4 text-center">
        <div className="flex flex-row items-center justify-center space-x-4">
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 p-1 text-lg border border-primary rounded-lg hover:bg-primary hover:text-gray-100 transition-colors"
            onClick={decrement}
          >
            -
          </button>
          <span className="inline-block p-1 text-lg">{quantity}</span>
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 p-1 text-lg border border-primary rounded-lg hover:bg-primary hover:text-gray-100 transition-colors"
            onClick={increment}
          >
            +
          </button>
        </div>
        <button type="button" className="text-red-600 text-lg capitalize mt-4">
          remove
        </button>
      </div>
      {/* <!-- price --> */}
      <div className="w-1/4">
        <p className="text-primary">${product.price * quantity}</p>
      </div>
    </div>
  );
};
export default CartItem;
