const paymentController = require("../controller/paymentController.js");
const allProductController = require("../controller/allProductController.js");
const express = require("express");
const {
  razorypayOrder,
  razorpayVerify,
} = require("../controller/razoraypayPaymentController.js");

const router = express.Router();

router.post("/payment", paymentController);
router.get("/all-products", allProductController);
router.post("/order", razorypayOrder);
router.post("/verify", razorpayVerify);

module.exports = router;
