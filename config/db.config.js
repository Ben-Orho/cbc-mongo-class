const mongoose = require("mongoose");
// const {connect} = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/unilag");
    console.log(`Database Successfully connected`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
