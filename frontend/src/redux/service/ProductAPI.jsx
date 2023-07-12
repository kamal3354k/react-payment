import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ProductAPI = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "/all-products" }),
  }),
});

export const { useGetProductsQuery } = ProductAPI;
export default ProductAPI;
