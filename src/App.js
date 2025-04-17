import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./stores/components/Navbar";
import Home from "./stores/pages/Home";
import CategoryPage from "./stores/pages/CategoryPage";
import CartPage from "./stores/pages/CartPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/category/electronics"
          element={<CategoryPage category="electronics" />}
        />
        <Route
          path="/category/jewelery"
          element={<CategoryPage category="jewelery" />}
        />
        <Route
          path="/category/men's clothing"
          element={<CategoryPage category="men's clothing" />}
        />
        <Route
          path="/category/women's clothing"
          element={<CategoryPage category="women's clothing" />}
        />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
