import React, { useEffect, useState } from "react";

import Product from "./Product";
import useFetchDataQuery from "../hooks/UseFetchDataQuery";

function ProductList() {
  // useEffect(() => {
  //   FetchData();
  // }, []);

  const { data, error, isLoading } = useFetchDataQuery(
    ["Products"],
    "https://fakestoreapi.com/products"
  );

  //  = useQuery({
  //   queryKey: ["Products"],
  //   queryFn: () => FetchData("https://fakestoreapi.com/products"),
  // });

  return (
    <>
      <h3 className="text-center m-3"> Product List </h3>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {isLoading && (
              <h3 className="text-center btn btn-danger">Loading ....</h3>
            )}
            {error && (
              <h3 className="text-center btn btn-danger">
                Some thing went wrong{" "}
              </h3>
            )}
            {data &&
              data.map((product) => (
                <Product product={product} key={product.id} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
