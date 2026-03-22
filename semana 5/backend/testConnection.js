const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado correctamente");
    process.exit();
  })
  .catch(err => {
    console.error("Error:", err);
    process.exit();
  });