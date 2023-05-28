const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.MONGO_URL;
mongoose.set({ strictQuery: false });

const connectToMongo = () => {
  mongoose.connect(
    mongoUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("connect to server successfully");
      }
    }
  );
};

module.exports = connectToMongo;
