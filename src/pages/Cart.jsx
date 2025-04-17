import React, { useContext } from "react";
import { Context } from "../context/cartContext";
import Header from "../components/Header";

function Cart() {
  const { cart, setCart } = useContext(Context);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <h2 className="text-center">Cart Items </h2>
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
