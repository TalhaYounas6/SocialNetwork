const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(process.env.DATABASE_URL)
      .then(() => {
        console.log("Database connection successfull");
      })
      .catch((err) => {
        console.log("database connection error" + err);
      });
  }
}

module.exports = new Database();
