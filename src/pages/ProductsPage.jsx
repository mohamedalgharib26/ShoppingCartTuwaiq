import React, { useEffect, useReducer, useState } from "react";

import Header from "../components/Header";
import axios from "axios";

export const productsInitialState = {
  isLoading: false,
  data: [],
  error: "This is error for testing",
};

export const ProductsReducer = (state, action) => {
  switch (action.type) {
    case "Loading":
      return {
        ...state,
        isLoading: true,
        data: [],
        error: "",
      };
    case "Success":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case "Error":
      return {
        ...state,
        error: "Some thing went wrong ",
        data: [],
        isLoading: false,
      };
    default:
      break;
  }
};
// export const CounterReducer = (state, action) => {
//   switch (action.type) {
//     case "Increment":
//       return {
//         ...state,
//         counter: state.counter + action.payload,
//       };
//     case "Decrement":
//       return {
//         ...state,
//         counter: state.counter - action.payload,
//       };
//     default:
//       return {
//         ...state,
//         counter: 0,
//       };
//   }
// };

function Products() {
  const FetchData = async () => {
    try {
      dispatch({
        type: "Loading",
      });
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch({
        type: "Success",
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: "Error",
        error: "Some Thing Went wrong ",
      });
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  const [state, dispatch] = useReducer(ProductsReducer, productsInitialState);

  return (
    <div>
      <Header />
      <h3 className="text-center m-3"> Product List </h3>
      {state?.data?.length > 0 ? (
        <h4 className="text-center">Products is here </h4>
      ) : null}
      {state.isLoading && <h3 className="text-center">Loading .... </h3>}
      {state?.error && <p className="text-center text-danger">{state.error}</p>}
      {/* <h4>Counter : {state.counter} </h4>
      <button
        className="btn btn-primary m-2"
        onClick={() =>
          dispatch({
            type: "Increment",
            payload: 5,
          })
        }
      >
        Increment
      </button>
      <button
        className="btn btn-info m-2"
        onClick={() =>
          dispatch({
            type: "Decrement",
            payload: 5,
          })
        }
      >
        Decrement
      </button>
      <button className="btn btn-danger" onClick={() => dispatch("Reset")}>
        Reset
      </button> */}

      {/* <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Products;
