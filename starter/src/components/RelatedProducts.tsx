import React from "react";
import ProductItem from "./ProductItem";
import { ProductProps } from "../properties/props";
import useRandomItems from "../customhooks/useRandomItems";

const RelatedProducts: React.FC = () => {
  const relatedProducts = useRandomItems("http://localhost:5001/products", 4);

  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {relatedProducts.map((product: ProductProps) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
