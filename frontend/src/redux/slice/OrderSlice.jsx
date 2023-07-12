import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addOrder } = OrderSlice.actions;
export default OrderSlice.reducer
