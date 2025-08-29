const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/toyshop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ✅ Routes
app.use("/api", orderRoutes);

app.listen(8000, () =>
  console.log("🚀 Server running at http://localhost:8000")
);