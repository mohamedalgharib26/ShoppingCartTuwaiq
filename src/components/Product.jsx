import React, { useContext, useState } from "react";
import { Context } from "../context/cartContext";

function Product({ product }) {
  const { cart, addToCart } = useContext(Context);
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="col-3">
      <div
        className="card shadow-sm "
        style={{
          maxHeight: "450px",
          height: "450px",
          margin: "20px 10px",
        }}
      >
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          src={product.image}
        />
        <div className="card-body">
          <p className="card-text">{product.title}</p>
          
          {/* التحكم في الكمية */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <button className="btn btn-outline-secondary btn-sm" onClick={handleDecrease}>-</button>
            <span className="mx-2">{quantity}</span>
            <button className="btn btn-outline-secondary btn-sm" onClick={handleIncrease}>+</button>
          </div>

          <div className="d-flex justify-content-between align-items-start ">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-md btn-success"
                onClick={() => addToCart(product, quantity)}
              >
                Add To Cart
              </button>
            </div>
            <p className="text-muted">{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
