import React, { Component } from "react";
import Product from "./product";
import "./css/catalog.css";

class Catalog extends Component {
  state = {};
  render() {
    return (
      <div className="catalog-page">
        <h3>This is our amazing catalog</h3>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    );
  }
}

export default Catalog;
