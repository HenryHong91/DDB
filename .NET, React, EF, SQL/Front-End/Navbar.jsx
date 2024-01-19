import React from "react";
import { Link } from "react-router-dom";

export default function NavbarTop() {
  const style =
    "border-4 bg-indigo-600 w-20 h-10 flex justify-center rounded-3xl text-white hover:scale-125";
  return (
    <div className="flex flex-row justify-evenly p-5 w-full bg-slate-200 mb-10 gap-10 ">
      <Link to="/" className={style}>
        <button>Client</button>
      </Link>
      <Link to="/product" className={style}>
        <button>Product</button>
      </Link>
      <Link to="/sale" className={style}>
        <button>Sale</button>
      </Link>
      <Link to="/store" className={style}>
        <button>Store</button>
      </Link>
    </div>
  );
}
