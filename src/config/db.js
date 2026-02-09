const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI); // <-- just this
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error("MongoDB connection error:");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
