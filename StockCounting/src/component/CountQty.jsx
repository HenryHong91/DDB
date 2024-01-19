import React from "react";

export default function CountQty({ countedQty, setCountedQty }) {
  const handleChange = (e) => {
    parseInt(setCountedQty(e.target.value));
  };
  return (
    <div className="card-body items-center text-center p-0">
      <h1>Qty: </h1>
      <input
        type="number"
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs"
        value={countedQty}
        onChange={handleChange}
      />
    </div>
  );
}
