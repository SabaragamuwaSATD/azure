// src/components/users/userModel.js
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// Mock database
const users = [
  new User(1, "John Doe", "john@example.com"),
  new User(2, "Jane Smith", "jane@example.com"),
];

module.exports = {
  User,
  findAll: () => Promise.resolve(users),
  findById: (id) =>
    Promise.resolve(users.find((user) => user.id === parseInt(id))),
  create: (userData) => {
    const newUser = new User(users.length + 1, userData.name, userData.email);
    users.push(newUser);
    return Promise.resolve(newUser);
  },
};
