import React from "react";
import { useCart } from "../Context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="container mt-4">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="d-flex flex-wrap">
          {cartItems.map((item) => (
            <div className="card m-2" style={{ width: "18rem" }} key={item.id}>
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ height: "250px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
