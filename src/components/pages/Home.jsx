import Product from "../Product";
import Layout from "../Layout";
import GlobalContext from "../../contexts/GlobalContext";
import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";

const Home = () => {
  const { globalState, dispatch } = useContext(GlobalContext);

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
        {globalState.products.map((product) => (
          <ProductContext.Provider
            key={product.id}
            value={{ ...product, dispatch }}
          >
            <Product />
          </ProductContext.Provider>
        ))}
      </div>
    </Layout>
  );
};
export default Home;
