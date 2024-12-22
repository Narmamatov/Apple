import axios, { all } from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { API } from "../helpers/Const";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const initailState = {
  product: [],
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initailState);

  //!!! API
  const allProduct = state.product;
  async function readProduct() {
    try {
      let { data } = await axios(API);
      dispatch({ type: "GET_PRODUCT", payload: data });
    } catch (error) {
      console.log(error);
    }
  }

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readProduct();
    } catch (error) {
      console.log(error);
    }
  }

  function searchProduct(str) {
    if (!str) return readProduct();
    let result = state.product.filter((el) =>
      el.title.toLowerCase().includes(str.toLowerCase())
    );
    dispatch({ type: "GET_PRODUCT", payload: result });
  }
  /// PRICE

  function expensiveProduct() {
    let sum = state.product.filter((el) => (el.price >= 100000 ? el : null));
    dispatch({ type: "GET_PRODUCT", payload: sum });
  }

  function averageProduct() {
    let sum = state.product.filter((el) => {
      if (el.price >= 50000 && el.price < 100000) {
        return el;
      }
    });
    dispatch({ type: "GET_PRODUCT", payload: sum });
  }
  function cheapProduct() {
    let sum = state.product.filter((el) => {
      if (el.price >= 0 && el.price < 50000) {
        return el;
      }
    });
    dispatch({ type: "GET_PRODUCT", payload: sum });
  }
  /// PRICE

  //!!! API
  
  //! pagination

  const [page, setPage] = useState(1);
  const itemPerPage = 4;
  const count = Math.ceil(state.product.length / itemPerPage);

  function handlePage() {
    let start = (page - 1) * itemPerPage;
    let end = start + itemPerPage;
    return state.product.slice(start, end);
  }

  //! pagination
  const values = {
    addProduct,
    readProduct,
    product: state.product,
    handlePage,
    count,
    setPage,
    deleteProduct,
    searchProduct,
    expensiveProduct,
    averageProduct,
    cheapProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
