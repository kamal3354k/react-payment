import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slice/CartSlice";
import ProductAPI from "../service/ProductAPI";
import PaymentAPI from "../service/PaymentAPI";
import OrderSlice from "../slice/OrderSlice";
// import ProductSlice from "../slice/ProductSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    // product: ProductSlice
    product: ProductAPI.reducer,
    payment: PaymentAPI.reducer,
    order:OrderSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProductAPI.middleware)
      .concat(PaymentAPI.middleware),
});

export default store;
