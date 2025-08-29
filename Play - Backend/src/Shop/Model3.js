const mongoose = require('mongoose') 

mongoose.connect("mongodb://127.0.0.1:27017/toyshop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ✅ Schemas
const CartSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  quantity: { type: Number, default: 1 },
},
{
    collection: "Cart"
});

const OrderSchema = new mongoose.Schema({
  items: Array,
  total: Number,
  email: String,
  createdAt: { type: Date, default: Date.now },
},{
    collection: "Order"
});

const Cart = mongoose.model("Cart", CartSchema);
const Order = mongoose.model("Order", OrderSchema);

module.exports = {Cart, Order}