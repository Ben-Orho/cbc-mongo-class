const { schema, model } = require("mongoose");

const userShema = new schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    password: {
      type: Number,
      required: true,
      trim: true, // to remove space btw characters if a user clicks space
    },
  },
  {
    timestamps: true,
  }
);

const userModel = new model("user", userShema);

module.exports = connectDB;
