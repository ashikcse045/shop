import Layout from "../Layout";
import CartItem from "../CartItem";

const Cart = () => {
  return (
    <Layout>
      <div className="space-y-4">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </Layout>
  );
};
export default Cart;
