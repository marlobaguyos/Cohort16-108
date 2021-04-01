import React, { Component } from "react";
import Product from "./product";
import ProductService from "./services/productService.js";
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

  componentDidMount() {
    console.log("Load data now");
    //call the service, get the catalog and put the catalog in the state
    let service = new ProductService();
    var data = service.getProduct();
  }
}

export default Catalog;
