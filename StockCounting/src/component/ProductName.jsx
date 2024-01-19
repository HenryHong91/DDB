import React, { useEffect } from "react";
import { readData } from "../api/Read";

export default function ProductName({ barcode, product, setProduct }) {
  useEffect(() => {
    readData().then((data) => {
      const barcodeData = data.find((item) => item.barcode === barcode);
      if (barcodeData) {
        setProduct(barcodeData.product);
      }
    });
  }, [barcode]);

  return (
    <div className="card-body items-center text-center pt-2 pb-0">
      <h1>Product Name</h1>
      <input
        type="text"
        className="input input-bordered w-full max-w-xs p-0"
        readOnly
        value={product}
      />
    </div>
  );
}
