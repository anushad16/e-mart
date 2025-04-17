import React from "react";

const Filter = ({ brands, selectedBrands, toggleBrand }) => {
  return (
    <div className="mb-3">
      <h5>Filter by Brand</h5>
      {brands.map((brand) => (
        <div className="form-check" key={brand}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={selectedBrands.includes(brand)}
            onChange={() => toggleBrand(brand)}
            id={brand}
          />
          <label className="form-check-label" htmlFor={brand}>
            {brand}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
