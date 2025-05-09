// src/components/orders/orderModel.js
class Order {
  constructor(id, userId, products, totalAmount, status) {
    this.id = id;
    this.userId = userId;
    this.products = products;
    this.totalAmount = totalAmount;
    this.status = status;
    this.createdAt = new Date();
  }
}

// Mock database
const orders = [
  new Order(1, 1, [{ productId: 1, quantity: 2 }], 1999.98, "completed"),
  new Order(2, 2, [{ productId: 2, quantity: 1 }], 699.99, "pending"),
];

module.exports = {
  Order,
  findAll: () => Promise.resolve(orders),
  findById: (id) =>
    Promise.resolve(orders.find((order) => order.id === parseInt(id))),
  findByUserId: (userId) =>
    Promise.resolve(
      orders.filter((order) => order.userId === parseInt(userId))
    ),
  create: (orderData) => {
    const newOrder = new Order(
      orders.length + 1,
      orderData.userId,
      orderData.products,
      orderData.totalAmount,
      orderData.status || "pending"
    );
    orders.push(newOrder);
    return Promise.resolve(newOrder);
  },
};
