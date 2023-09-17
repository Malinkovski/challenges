import React, { useState, useEffect } from "react";
import { ProductProps } from "./interfaces";

const API_URL = "https://challenges.brainster.tech/ajax_data/data.json";

interface EachFilterProps {
  id: string;
  value: string;
  filterType: "gender" | "brand" | "all";
  onFilterChange: (value: string) => void;
}

function EachFilter({id, value, filterType, onFilterChange}: EachFilterProps) {
  const [badgeCount, setBadgeCount] = useState<number>(0);
  
  useEffect(() => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((data: { products: ProductProps[] }) => {
      let filteredProducts: ProductProps[] = [];
      
      if (filterType === "gender") {
        filteredProducts = data.products.filter(
          (product) => product.gender === value
          );
          
        } else if (filterType === "brand") {
          filteredProducts = data.products.filter(
            (product) => product.brand === value
            );
            
          } else if (filterType === "all") {
            filteredProducts = data.products;
          }
          
          else {
            filteredProducts = [];
          }
          setBadgeCount(filteredProducts.length);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
      }, [value, filterType]);
      
      return (
        <li className="filter-option">
      <input
        id={id}
        className="filter"
        type="radio"
        name="filter"
        value={value}
        onChange={() => onFilterChange(value)}
        />
      <label htmlFor={id}>
        {value.toUpperCase()}
        <span className="badge">
          {badgeCount}
        </span>
      </label>
    </li>
  );
}

export default EachFilter;
