import Layout from "../Layout";
import CartItem from "../CartItem";

import GlobalContext from "../../contexts/GlobalContext";
import { useContext } from "react";

const Cart = () => {
  const { globalState, dispatch } = useContext(GlobalContext);
  const { cart } = globalState;
  if (!cart.products) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-4">
        {cart.products.map((element) => (
          <CartItem
            key={element.productId}
            products={globalState.products}
            productId={element.productId}
            quantity={element.quantity}
            dispatch={dispatch}
          />
        ))}
      </div>
    </Layout>
  );
};
export default Cart;
