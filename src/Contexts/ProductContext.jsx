import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import productReducer from "../Reducers/productReducer";

const initialState = {
  products: [],
  sigleProduct: {},
};

const ProductContext = createContext(initialState);

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProducts = async (url) => {
    const res = await axios.get(url);
    const products = await res.data;
    dispatch({ type: "SET_API_DATA", payload: products });
  };

  const getSingleProduct = async (url) => {
    const res = await axios.get(url);
    const singleProducts = await res.data;
    dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProducts });
  };

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, ProductContext, useProductContext };
