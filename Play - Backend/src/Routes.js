const express = require('express');
const KidsController = require('./Controller');
const { addToCart, getCart, placeOrder, getOrders, removeCartItem } = require("./Controller");

const router = express.Router();

router.post('/createlist', KidsController.Createlist);
router.get('/showlist',KidsController.GetList)
router.put('/updatelist/:id',KidsController.UpdateList)
router.post('/contact-form',KidsController.Contactform)
router.post('/admission',KidsController.AdmissionForm)
router.post("/order", placeOrder); // Place order
router.get("/order", getOrders);   // Get all orders
// Cart routes
router.post("/cart", addToCart);
router.get("/cart", getCart);
router.delete("/cart/:id", removeCartItem);



module.exports = router;
