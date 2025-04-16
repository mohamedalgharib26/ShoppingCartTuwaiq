import React, { useContext } from "react";
import { Context } from "../context/cartContext";
import Header from "../components/Header";

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(Context);

  const handleIncrease = (id, currentQty) => {
    updateQuantity(id, currentQty + 1);
  };

  const handleDecrease = (id, currentQty) => {
    if (currentQty > 1) {
      updateQuantity(id, currentQty - 1);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <h2 className="text-center my-4">Cart Items</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((element, index) => (
                <tr key={element.id}>
                  <th>{index + 1}</th>
                  <td>{element.title}</td>
                  <td>${element.price}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-outline-secondary me-2"
                        onClick={() => handleDecrease(element.id, element.quantity)}
                      >
                        -
                      </button>
                      <span>{element.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary ms-2"
                        onClick={() => handleIncrease(element.id, element.quantity)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(element.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-end">
            <h5>Total: ${total.toFixed(2)}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
