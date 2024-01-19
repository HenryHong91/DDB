import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import staffContext from "../context/staffContext.js";
import { Alert } from "@mui/material";

export default function BarcodeInput() {
  const { barcode, setBarcode } = useContext(staffContext);
  const handleOnChange = (e) => {
    setBarcode(e.traget.value);
  };
  const btnStyle = `btn mt-10 ${barcode ? "btn-success" : null}`;
  const handleScanner = () => {
    document.getElementById("my_modal_4").showModal();
    function onScanSuccess(decodedText) {
      setBarcode(decodedText);
      console.log(`barcode matched = ${decodedText}`);
    }

    function onScanFailure(error) {}

    let html5QrcodeScanner2 = new Html5QrcodeScanner(
      "barcode",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );
    html5QrcodeScanner2.render(onScanSuccess, onScanFailure);
  };
  return (
    <div className="App">
      <dialog id="my_modal_4" className="modal  w-11/12 max-w-5xl m-0">
        <div className="modal-box w-11/12 max-w-5xl flex justify-center text-center flex-col ">
          <h3 className="font-bold text-lg">Allow Carmera permission</h3>

          <div className="modal-action flex justify-center">
            <form method="dialog">
              <div id="barcode"></div>
              {barcode ? <Alert>{barcode}, Succssfully Scanned</Alert> : null}

              <button className={btnStyle}>Save</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="card-body items-center text-center p-0  mt-2 ">
        <input
          type="text"
          placeholder="Product Barcode"
          className="input input-bordered input-secondary w-full max-w-xs"
          value={barcode}
          onChange={handleOnChange}
        />
        {barcode ? <Alert>{barcode}, Succssfully Scanned</Alert> : null}
        <button className="btn mt-2 bg-error w-2/5" onClick={handleScanner}>
          SCAN
        </button>
      </div>
    </div>
  );
}
