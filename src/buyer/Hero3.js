import React from 'react';
import { Link } from 'react-router-dom';
import NavBar3 from './Navbar/NavBar3';
import heroImg from '../images/right-img13.jpeg';
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
const Hero = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, locality, area, newPrice, title }) =>
          category === selected ||
          locality === selected ||
          area === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ locality, category, img, title, star, reviews, area,prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          locality={locality}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          area={area}
          category={category}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

    return (
        <div className="container" style={{
            display: 'flex',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '20px'
        }}>
            <div className="hero" id="hero3" style={{ gridColumn: '1 / 2' }}>
                <div>
                    <NavBar3 />
                </div>
                <div>
                    <Sidebar handleChange={handleChange} />

                </div>
                <div>
                    <Recommended handleClick={handleClick} />
                </div>
                <div >
                    <Products result={result} />
                </div>

            </div>


        </div>

    )
}

export default Hero;