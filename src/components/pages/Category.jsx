import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../../contexts/GlobalContext";
import Layout from "../Layout";
import ProductContext from "../../contexts/ProductContext";
import Product from "../Product";

const Category = () => {
  const { category } = useParams();

  const { globalState, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    document.title = category.charAt(0).toUpperCase() + category.slice(1);
  }, [category]);

  if (globalState.loading) {
    return (
      <Layout>
        <h1>loading...</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-3 gap-y-3">
        {globalState.products.map((product) => {
          if (product.category === category) {
            return (
              <ProductContext.Provider
                key={product.id}
                value={{ ...product, dispatch }}
              >
                <Product />
              </ProductContext.Provider>
            );
          }
        })}
      </div>
    </Layout>
  );
};
export default Category;
