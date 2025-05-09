// src/components/products/productModel.js
class Product {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

// Mock database
const products = [
  new Product(1, "Laptop", 999.99, "High-performance laptop"),
  new Product(2, "Smartphone", 699.99, "Latest smartphone model"),
];

module.exports = {
  Product,
  findAll: () => Promise.resolve(products),
  findById: (id) =>
    Promise.resolve(products.find((product) => product.id === parseInt(id))),
  create: (productData) => {
    const newProduct = new Product(
      products.length + 1,
      productData.name,
      productData.price,
      productData.description
    );
    products.push(newProduct);
    return Promise.resolve(newProduct);
  },
};
