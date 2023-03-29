import React from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import "./ProductView.css";
import { useState, useEffect } from "react";

function ProductView({ products }) {
  const [sideOpen, setSideOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(0);

  useEffect(() => {
    console.log(`selectedProduct CHANGED TO`, selectedProduct);
    if (selectedProduct)
      setSideOpen(true);
  }, [selectedProduct]);

  useEffect(() => {
    console.log(`sideOpen CHANGED TO`, sideOpen);
    if (!sideOpen)
      setSelectedProduct();
  }, [sideOpen]);

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((item) => (
            <ProductListItem
              key={item.id}
              product={item}
              isSelected={selectedProduct ? item.id === selectedProduct.id : false}
              onClick={() => setSelectedProduct({ ...item })}
            />
          ))}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle" onClick={() => setSideOpen((prev) => !prev)}>
            {sideOpen ? ">" : "<"}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;
