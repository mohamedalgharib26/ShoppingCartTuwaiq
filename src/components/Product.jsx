import React, { useContext } from "react";
import { Context } from "../context/cartContext";

function Product({ product }) {
  const { cart, addToCart } = useContext(Context);

  return (
    <div className="col-3">
      <div
        className="card shadow-sm "
        style={{
          maxHeight: "450px",
          height: "400px",
          margin: "20px 10px",
        }}
      >
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          src={product.image}
        />

        <div className="card-body">
          <p className="card-text">{product.title}</p>
          <div className="d-flex justify-content-between align-items-start ">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-md btn-success"
                onClick={() => addToCart(product)}
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
