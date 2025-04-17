import React from "react";
import { useCart } from "../Context/CartContext";

const Products = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const inCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{ height: "250px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        {inCart ? (
          <button
            className="btn btn-danger"
            onClick={() => removeFromCart(product.id)}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
