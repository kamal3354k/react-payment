import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../constant/ProductData";

const StatusObj = Object.freeze({
  idle: "idle",
  error: "error",
  loading: "loading"
});

const ProductSlice = createSlice({
  name: "product",
  initialState: { data: [], status: StatusObj.idle },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(ProductFetch.pending, (state) => {
        state.status = StatusObj.loading;
      })
      .addCase(ProductFetch.fulfilled, (state, action) => {
        state.status = StatusObj.idle;
        state.data = action.payload;
      })
      .addCase(ProductFetch.rejected, (state) => {
        state.status = StatusObj.error;
      });
  }
});

export const { setProduct, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;

export const ProductFetch = createAsyncThunk("product/fetch", async () => {
  const res = await fetch("http://localhost:8000/all-products");
  const data = await res.json();
  return data||ProductData;

});
