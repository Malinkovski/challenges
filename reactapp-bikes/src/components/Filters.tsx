import React, { useEffect } from "react";
import EachFilter from "./EachFilter";

import { ProductProps } from "./interfaces";

interface FiltersProps {
  data: ProductProps[];
  selectedGender: string;
  selectedBrand: string;
  setSelectedGender: (gender: string) => void;
  setSelectedBrand: (brand: string) => void;
  setFilteredData: (data: ProductProps[]) => void;
}

function Filters({
  data,
  selectedGender,
  setSelectedGender,
  selectedBrand,
  setSelectedBrand,
  setFilteredData,
}: FiltersProps) {
  useEffect(() => {
    const filterData = () => {
      let filtered: ProductProps[] = data;

      if (selectedGender !== "ALL") {
        filtered = filtered.filter(
          (product) => product.gender === selectedGender
        );
        setSelectedBrand("ALL");
      }

      if (selectedBrand !== "ALL") {
        filtered = filtered.filter(
          (product) => product.brand === selectedBrand
        );
        setSelectedGender("ALL");
      }

      setFilteredData(filtered);
    };

    filterData();
  }, [selectedGender, selectedBrand, data, setFilteredData]);

  const handleGenderFilterChange = (value: string) => {
    setSelectedBrand("ALL");
    setSelectedGender(value);
  };

  const handleBrandFilterChange = (value: string) => {
    setSelectedBrand(value);
    setSelectedGender("ALL");
  };

  return (
    <div id="side-navbar">
      <div>
        <div className="sidebar border-bottom">
          <h3>Filter by:</h3>
          <ul className="filter-list">
            {/* All Options */}
            <EachFilter
              id="option-all-brand"
              value="ALL"
              filterType="all"
              onFilterChange={handleBrandFilterChange}
            />
          </ul>
        </div>
        <div className="sidebar border-bottom">
          <h3>Gender</h3>
          <ul className="filter-list">
            {/* Gender Options */}
            <EachFilter
              id="option-m"
              value="MALE"
              filterType="gender"
              onFilterChange={handleGenderFilterChange}
            />
            <EachFilter
              id="option-f"
              value="FEMALE"
              filterType="gender"
              onFilterChange={handleGenderFilterChange}
            />
          </ul>
        </div>
        <div className="sidebar border-bottom">
          <h3>Brand</h3>
          <ul className="filter-list">
            {/* Brand Options */}
            <EachFilter
              id="option1"
              value="LE GRAND BIKES"
              filterType="brand"
              onFilterChange={handleBrandFilterChange}
            />
            <EachFilter
              id="option2"
              value="KROSS"
              filterType="brand"
              onFilterChange={handleBrandFilterChange}
            />
            <EachFilter
              id="option3"
              value="EXPLORER"
              filterType="brand"
              onFilterChange={handleBrandFilterChange}
            />
            <EachFilter
              id="option4"
              value="VISITOR"
              filterType="brand"
              onFilterChange={handleBrandFilterChange}
            />
            <EachFilter
              id="option5"
              value="PONY"
              filterType="brand"
              onFilterChange={handleBrandFilterChange}
            />
            <EachFilter
              id="option6"
              value="FORCE"
              filterType="brand"
              onFilterChange={handleBrandFilterChange}
            />
            <EachFilter
              id="option7"
              value="E-BIKES"
              filterType="brand"
              onFilterChange={handleBrandFilterChange}
            />
            <EachFilter
              id="option8"
              value="IDEAL"
              filterType="brand"
              onFilterChange={handleBrandFilterChange}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filters;
