import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Alert } from "@mui/material";
import staffContext from "../context/staffContext";

export default function BayLocation() {
  const { bayLocation, setBayLocation } = useContext(staffContext);
  const [alertbayLocation, setAlertBayLocation] = useState(false);

  const handleOnchange = (e) => {
    setBayLocation(e.target.value);
  };
  const handleScanner = () => {
    document.getElementById("my_modal_3").showModal();
    function onScanSuccess(decodedText) {
      setBayLocation(decodedText);
      console.log(`location matched = ${decodedText}`);
    }
    function onScanFailure(error) {}

    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  };

  const btnStyle = `btn mt-10 ${bayLocation ? "btn-success" : null}`;
  return (
    <div className="App mt-10">
      <dialog id="my_modal_3" className="modal   max-w-5xl m-0">
        <div className="modal-box w-11/12 max-w-5xl flex justify-center text-center flex-col ">
          <h3 className="font-bold text-lg">Allow Carmera permission</h3>
          {bayLocation ? (
            <Alert>{bayLocation}, Succssfully Scanned</Alert>
          ) : null}
          <div className="modal-action flex justify-center">
            <form method="dialog">
              <div id="reader" preload="none"></div>

              <button className={btnStyle}>Save</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="card-body items-center text-center p-0 ">
        {bayLocation ? <Alert>{bayLocation}, Succssfully Scanned</Alert> : null}
        <input
          type="text"
          placeholder="Bay Location"
          className="input input-bordered input-secondary w-full max-w-xs"
          value={bayLocation}
          onChange={handleOnchange}
        />
        {bayLocation ? null : (
          <Alert severity="error">Please input BayLocation </Alert>
        )}
        <button className="btn mt-2 bg-error w-2/5" onClick={handleScanner}>
          SCAN
        </button>
      </div>
    </div>
  );
}
