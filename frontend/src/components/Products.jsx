import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/slice/CartSlice";
import {
  useGetProductsQuery
} from "../redux/service/ProductAPI";
// import { ProductFetch } from "../redux/slice/ProductSlice";



export default function Products() {
  const [allCartId, setAllCartId] = useState([]);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  // withthunk
  // const { data, status } = useSelector((state) => state.product);

  // withCreateAPIQuery
  const { data}  = useGetProductsQuery();
  



  useEffect(() => {
    setAllCartId(cartData?.map((item) => item?.id));
  }, [cartData]);

  // useEffect(() => {
  //   dispatch(ProductFetch());
  // }, []);

  const handleAddProduct = (product) => {
    dispatch(add(product));
  };

  // if (status === "loading") return <>loading...</>;
  // if (status === "error") return <>something went wrong!</>;

  return (
    <div className="productsWrapper">
      {data?.data?.map((product) => {
        let isAdded = allCartId?.includes(product.id);
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button
              className="btn"
              disabled={isAdded}
              style={
                isAdded
                  ? { background: "green", cursor: "default" }
                  : { background: "blue" }
              }
              onClick={() => handleAddProduct(product)}
            >
              {isAdded ? "Added" : "Add to cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
