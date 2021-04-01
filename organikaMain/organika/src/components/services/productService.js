var data = [{
  id: "5f40a",
  price: 12.32,
  stock: 13,
  title: "Cabbage",
  image: "img-1.jpg",
  discount: 5,
  category: "Vegetable",
}];

class ProductService {
  getProducts() {
    //logic to connect and retrieve data from a server
    return data;
  }
}

export default ProductService;