const stripe = require("stripe");

const paymentController = async (req, res) => {
  try {
    const { id, amount } = req.body;
    const stripeClient = stripe(process.env.STRIPE_SECRET_TEST, {
      apiVersion: "2020-08-27",
    });
    const payment = await stripeClient.paymentIntents.create({
      amount: amount,
      currency: "inr",
      description: "Inr Payment",
      payment_method: id,
      confirm: true,
    });
    res.status(200).json({ message: "Payment successful" });
  } catch (err) {
    res.status(401).json({ message: "Payment Failed", error: err });
  }
};

module.exports = paymentController