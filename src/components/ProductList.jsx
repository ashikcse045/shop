import { useEffect } from "react";
import Product from "./Product";

const ProductList = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-3 gap-y-3">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};
export default ProductList;
