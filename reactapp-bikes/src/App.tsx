import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Title from "./components/Title";
import { ProductProps } from "./components/interfaces";
import "./App.css";

const API_URL = "https://challenges.brainster.tech/ajax_data/data.json";

function App () {
  const [data, setData] = useState<ProductProps[]>([]);
  const [filteredData, setFilteredData] = useState<ProductProps[]>([]);
  const [selectedGender, setSelectedGender] = useState("ALL");
  const [selectedBrand, setSelectedBrand] = useState("ALL");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.products as ProductProps[]);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Title />
      <section id="main-section">
        <Filters
          data={data}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          setFilteredData={setFilteredData}
        />
        <div id="bikes" className="card-container">
          {filteredData.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
