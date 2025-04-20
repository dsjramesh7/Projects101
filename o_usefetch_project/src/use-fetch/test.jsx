import React from "react";
import useFetch from ".";

const FetchHookTest = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  // console.log(error, data, loading);
  return (
    <div>
      <h1>Use Fetch Custom Hook</h1>
      {error ? <div>error</div> : null}

      {loading ? (
        <h1>Loading Wait.....</h1>
      ) : (
        <>
          {data && data.products && data.products.length > 0
            ? data.products.map((item) => <div key={item.id}>{item.title}</div>)
            : null}
        </>
      )}
    </div>
  );
};

export default FetchHookTest;
