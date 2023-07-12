import React from "react";
import APP_CONFIG from "../config/app.config";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripeTestPromise = loadStripe(APP_CONFIG.STRIPE_PAYMENT.PUBLIC_KEY);
const StripeContainer = ({product}) => {
  console.log(stripeTestPromise);
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm product={product} />
    </Elements>
  );
};

export default StripeContainer;
