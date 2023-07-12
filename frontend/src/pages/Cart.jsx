import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slice/CartSlice";
import APP_CONFIG from "../config/app.config";
import {
  useOrderProductsMutation,
  useVerifyProductsMutation,
} from "../redux/service/PaymentAPI";
import { addOrder } from "../redux/slice/OrderSlice";

export default function Cart() {
  const products = useSelector((state) => state.cart);
  const orderIDArray = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [orderProducts] = useOrderProductsMutation();
  const [verifyProducts] = useVerifyProductsMutation();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleRazorpay = (item) => {
    orderProducts(item)
      .then((d) => handlePopUpRazorpay(d?.data, item))
      .catch((e) => console.log(e));
  };

  const handlePopUpRazorpay = (data, item) => {
    const { amount, currency, id } = data.order;
    var options = {
      key: APP_CONFIG.RAZORPAY.KEY_ID,
      amount,
      currency,
      order_id: id,
      name: item.title,
      handler: function (res) {
        verifyProducts({
          razorpayPaymentId: res.razorpay_payment_id,
        })
          .then((d) => {
            dispatch(addOrder(item.id));
          })
          .catch((e) => console.log(e));
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  console.log(orderIDArray, "orderIDArray");

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <div className="action-btn-container">
              {orderIDArray.includes(product?.id) ? (
                <button className="order-btn">Ordered</button>
              ) : (
                <>
                  <button
                    className="btn checkout-btn"
                    onClick={() => handleRazorpay(product)}
                  >
                    Checkout
                  </button>
                  <button
                    className="btn"
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
