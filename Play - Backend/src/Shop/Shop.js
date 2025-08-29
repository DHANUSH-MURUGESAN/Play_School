import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
app.use(bodyParser.json());

let cartDB = [];
let orderDB = [];

// Save cart
app.post("/cart", (req, res) => {
  cartDB.push(req.body);
  res.json({ message: "Item added to cart", cartDB });
});

// Place order
app.post("/order", (req, res) => {
  const order = req.body.cart;
  orderDB.push(order);

  // Send mail
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: user_mail1, pass: mail_pass },
  });

  transporter.sendMail({
    from: user_mail1,
    to,
    subject: "Order Confirmation - Dreamland Toy Shop",
    text: `Your order has been placed successfully: ${JSON.stringify(order)}`,
  });

  res.json({ message: "Order placed successfully", order });
});

app.listen(8000, () => console.log("Server running on port 8000"));