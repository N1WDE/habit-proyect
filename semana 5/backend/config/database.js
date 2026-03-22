const mongoose = require('mongoose');
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      family: 4
    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error MongoDB:', error);
  }
};

module.exports = connectDB;