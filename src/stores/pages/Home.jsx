import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "../components/Products";
import Filter from "../components/Filter";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      const uniqueCategories = [
        ...new Set(response.data.map((p) => p.category)),
      ];
      setCategories(uniqueCategories);
    });
  }, []);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <Filter
            brands={categories}
            selectedBrands={selectedCategories}
            toggleBrand={toggleCategory}
          />
        </div>
        <div className="col-md-9">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="d-flex flex-wrap">
            {filteredProducts.map((product) => (
              <Products key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
