import React, { useState, useEffect } from "react";

import axios from "axios";

function Product() {
  const url = "https://api.coindesk.com/v1/bpi/currentprice/CNY.json";
  const [currentprice, setProduct] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);

  if (currentprice) {
    content = (
      <div>
        <h1>{currentprice.time.updated}</h1>
        <h1>{currentprice.bpi.USD.rate} </h1>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default Product;
