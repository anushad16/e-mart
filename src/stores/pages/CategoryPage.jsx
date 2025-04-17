import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "../components/Products";

const CategoryPage = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => setProducts(res.data));
  }, [category]);

  return (
    <div className="container mt-4">
      <h3>{category.toUpperCase()}</h3>
      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
