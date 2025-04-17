import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { FaShoppingCart } from "react-icons/fa"; // For cart icon

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="text-warning">E-Mart</span> {/* Brand Styling */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/category/electronics">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/category/jewelery">
                Jewelry
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/category/men's clothing"
              >
                Men's Clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                to="/category/women's clothing"
              >
                Women's Clothing
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link
              className="btn btn-outline-light position-relative"
              to="/cart"
            >
              <FaShoppingCart size={20} />
              {cartItems.length > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-circle">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
