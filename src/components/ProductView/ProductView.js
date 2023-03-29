import React from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css';
import { useState } from 'react';

function ProductView({ products }) {

  const [sideOpen, setSideOpen] = useState(true);
  const [product, setProduct] = useState({});

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              isSelected={item.id === product.id}
              onClick={() => setProduct({...item})}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() => setSideOpen((prev)=>!prev)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={product}/>
      </div>
    </div>
  );
}

export default ProductView;
