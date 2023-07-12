import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PaymentAPI = createApi({
  reducerPath: "payment-razorpay",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    orderProducts: builder.mutation({
      query: (query) => {
        console.log(query, "query");
        return { url: "/order", method: "post", body: query };
      },
    }),
    verifyProducts: builder.mutation({
      query: (query) => {
        console.log(query, "query");
        return { url: "/verify", method: "post", body: query };
      },
    }),
  }),
});

export const { useGetProductsQuery, useOrderProductsMutation,useVerifyProductsMutation } = PaymentAPI;
export default PaymentAPI;
