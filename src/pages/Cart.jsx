import React, { useContext, useEffect } from "react";
// import { Context } from "../context/cartContext";
import Header from "../components/Header";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCartAction } from "../store/slices/cartSilce";

function Cart() {
  // const { cart, setCart } = useContext(Context);
  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, []);

  const dispatch = useDispatch();

  const clearCart = () => {
    localStorage.clear();
    dispatch(clearCartAction());
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <h2 className="text-center">Cart Items </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <button className="btn btn-dark m-2 " onClick={clearCart}>
              Clear cart{" "}
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"> Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((element) => {
                return (
                  <tr key={element.id}>
                    <th>{element.id}</th>
                    <td>{element.title}</td>

                    <td>{element.price}</td>
                    <td>{element.quantity}</td>
                    <td>
                      <button className="btn btn-danger">Delete </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Cart;
