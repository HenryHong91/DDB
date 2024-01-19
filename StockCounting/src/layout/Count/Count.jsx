import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Stat from "../../component/Stat";
import BarcodeInput from "../../component/BarcodeInput";
import CountQty from "../../component/CountQty";
import ProductName from "../../component/ProductName";
import { Link } from "react-router-dom";
import { Html5QrcodeScanner } from "html5-qrcode";
import staffContext from "../../context/staffContext";
import Alert from "@mui/material/Alert";
import { readData } from "../../api/Read";
import BayLocation from "../../component/BayLocation";

export default function Count() {
  const [countedQty, setCountedQty] = useState("");
  const [systemQty, setSystemQty] = useState("");
  const [product, setProduct] = useState("");

  const { staff, location, barcode, setBarcode, bayLocation, setBayLocation } =
    useContext(staffContext);
  const [alert, setAlert] = useState(false);
  const [alertcountedQty, setAlertCountedQty] = useState(false);

  const updateData = async () => {
    if (!countedQty) {
      setAlertCountedQty(true);
      setTimeout(() => {
        setAlertCountedQty(false);
      }, 2000);
      return;
    }

    fetch(`https://sheetdb.io/api/v1/oim7b3baoiqxh/barcode/${barcode}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          barcode: barcode,
          product: product,
          location: location,
          systemQty: systemQty,
          countedQty: countedQty,
          counter: staff,
          date: new Date(),
          baylocation: bayLocation,
        },
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
          setBarcode("");
          setBayLocation("");
          setCountedQty("");
          setProduct("");
        }, 4000);
      });
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center mt-1 ">
        <div className="card w-96 h-auto pt-10 bg-base-100 shadow-xl gap-1 justify-center ">
          <div className="gap-y-10  border-red-800 border-double w-full h-full  ">
            <div className="flex justify-center flex-col items-center gap-1"></div>

            <BarcodeInput />

            <ProductName
              barcode={barcode}
              product={product}
              setProduct={setProduct}
            />
            <CountQty countedQty={countedQty} setCountedQty={setCountedQty} />
            <div className="card-body items-center text-center gap-y-5 overflow-hidden">
              <Stat
                barcode={barcode}
                countedQty={countedQty}
                systemQty={systemQty}
                setSystemQty={setSystemQty}
              />
              {alert ? (
                <Alert severity="success">
                  {barcode},{countedQty} Qty successfully Updated !!
                </Alert>
              ) : null}
              <div className="card-actions w-full justify-evenly flex">
                <button
                  className="btn btn-success w-4/5"
                  onClick={() => updateData()}
                >
                  Save
                </button>
                <Link to="/" className="w-full">
                  <button className="btn bg-red-600  w-4/5">Back</button>
                </Link>
              </div>

              {alertcountedQty ? (
                <Alert severity="error">Please input Counted Qty</Alert>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
