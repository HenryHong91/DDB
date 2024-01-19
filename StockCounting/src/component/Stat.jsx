import React, { useEffect, useState } from "react";
import { readData } from "../api/Read";

export default function Stat({ barcode, countedQty, systemQty, setSystemQty }) {
  const [matchedItem, setMatchedItem] = useState(null);

  useEffect(() => {
    readData().then((data) => {
      const barcodeData = data.find((item) => item.barcode === barcode);
      if (barcodeData) {
        setSystemQty(barcodeData.systemQty);
        setMatchedItem(barcodeData.systemQty);
      }
    });
  }, [barcode]);

  const difference = countedQty - matchedItem;

  const backgroundColor =
    difference < 0
      ? "red"
      : difference > 10
      ? "yellow"
      : 10 > difference > 0
      ? "green"
      : "";

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow g-2">
      <div className="stat p-2">
        <div className="stat-title">System QTY</div>
        <div className="text-2xl">{systemQty}</div>
      </div>

      <div className="stat p-2">
        <div className="stat-title ">Counted QTY</div>
        <div className="text-2xl">{countedQty}</div>
      </div>

      <div className="stat p-2">
        <div className="stat-title">Difference</div>
        <div className="stat-value" style={{ color: backgroundColor }}>
          {difference}
        </div>
      </div>
    </div>
  );
}
