

// export default Price;
import React, { useState } from 'react';
import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml" style={{marginLeft:"-170px",marginBottom:"20px"}}>
        <h2 className="sidebar-title price-title">Price</h2>

        {/* Slider for price range */}
        <input
          type="range"
          min="0"
          max="20000"
          step="100"
          onChange={handleChange}
          className="slider"
          name="priceRange"
          list="tickmarks"
        />

        <datalist id="tickmarks">
          <option value="0" label="₹0" />
          <option value="5000" label="₹5,000" />
          <option value="10000" label="₹10,000" />
          <option value="15000" label="₹15,000" />
          <option value="20000" label="₹20,000" />
        </datalist>

      </div>
    </>
  );
};

export default Price;

