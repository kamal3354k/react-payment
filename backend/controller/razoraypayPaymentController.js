const Razorpay = require("razorpay");

module.exports.razorypayOrder = (req, res) => {
  var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEYID,
    key_secret: process.env.RAZORPAY_KEYSECRET,
  });
  var options = {
    amount: req.body.price * 100, // amount in the smallest currency unit
    currency: "INR",
  };
  instance.orders.create(options, function (err, order) {
    if (err) return res.send({ status: 500, message: "Order Failed!" });

    res.send({ status: 200, message: "Ordered Created", order });
  });
};

module.exports.razorpayVerify = async (req, res) => {
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEYID,
    key_secret: process.env.RAZORPAY_KEYSECRET,
  });

  const requestBody = {
    payment_id: req.body.razorpayPaymentId,
  };

  instance.payments
    .fetch(requestBody.payment_id)
    .then((payment) => {
      if (payment.status === "captured") {
        res.send({ status: 200, message: "Payment Verifed" });
      }
    })
    .catch((er) => {
      console.log(er);
      res.send({ status: 400, message: er.error.description });
    });
};
