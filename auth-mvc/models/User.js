// models/User.js
const users = []; // our "database"

class User {
  constructor(username, password) {
    this.id = Date.now().toString();
    this.username = username;
    this.password = password; // will be hashed
  }

  static async create(username, hashedPassword) {
    const user = new User(username, hashedPassword);
    users.push(user);
    return user;
  }

  static findByUsername(username) {
    return users.find(u => u.username === username);
  }

  static findById(id) {
    return users.find(u => u.id === id);
  }
}

module.exports = User;