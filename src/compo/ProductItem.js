import React, { Component } from "react";

import PropTypes from 'prop-types';


const ProductItem = ({ product }) => {



  return (
    <div className="product__card">
      <img className="product__image" src={""} alt={product.name} />
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <p className="product__description">
         
        </p>
        <div className="product__details">
          <p className="product__price">
            {product.price.formatted_with_symbol}
          </p>
        </div>
      </div>
    </div> 
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
