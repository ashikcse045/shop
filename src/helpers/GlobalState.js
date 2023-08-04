/* eslint-disable no-case-declarations */
import axios from "axios";
import { useReducer, useEffect } from "react";

const initialState = {
  products: [],
  loading: false,
  error: false,
  categories: [],
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        products: action.products,
        categories: action.categories,
        cart: action.cart,
        loading: action.loading,
      };

    case "FAILED":
      return {
        ...state,
        products: [],
        loading: false,
        error: true,
      };

    case "UPDATE":
      const updatedProducts = state.products.map((product) => {
        if (product.id == action.updatedProduct.id) {
          return {
            ...product,
            ...action.updatedProduct,
          };
        } else {
          return product;
        }
      });

      return {
        ...state,
        products: updatedProducts,
      };

    case "ADD":
      return {
        ...state,
        products: [action.product, ...state.products],
      };

    case "DELETE":
      const productsAfterDelete = state.products.filter(
        (product) => product.id != action.productId
      );
      return {
        ...state,
        products: productsAfterDelete,
      };

    case "INCREMENT_CART":
      const incrementCartProducts = state.cart["products"].map((element) => {
        if (element.productId == action.productId) {
          return {
            ...element,
            quantity: element.quantity + 1,
          };
        } else {
          return element;
        }
      });

      return {
        ...state,
        cart: {
          ...state.cart,
          products: incrementCartProducts,
        },
      };

    case "DECREMENT_CART":
      const decrementCartProducts = state.cart["products"].map((element) => {
        if (element.productId == action.productId && element.quantity > 1) {
          return {
            ...element,
            quantity: element.quantity - 1,
          };
        } else {
          return element;
        }
      });

      return {
        ...state,
        cart: {
          ...state.cart,
          products: decrementCartProducts,
        },
      };

    case "DELETE_CART":
      const cartProductsAfterDelete = state.cart.products.filter(
        (product) => product.productId != action.productId
      );
      return {
        ...state,
        cart: {
          ...state.cart,
          products: cartProductsAfterDelete,
        },
      };

    default:
      return state;
  }
};

const GlobalState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({
          type: "SUCCESS",
          products: [],
          categories: [],
          cart: [],
          loading: true,
        });

        const productsRes = await axios.get(
          "https://fakestoreapi.com/products"
        );
        const categoriesRes = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const cartRes = await axios.get("https://fakestoreapi.com/carts/5");

        dispatch({
          type: "SUCCESS",
          products: productsRes.data,
          categories: categoriesRes.data,
          cart: cartRes.data,
          loading: false,
        });
      } catch (e) {
        console.log(e);
        dispatch({
          type: "FAILED",
        });
      }
    };

    fetchData();
  }, []);

  return {
    globalState: state,
    dispatch: dispatch,
  };
};
export default GlobalState;
