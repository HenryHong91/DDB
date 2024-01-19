import React from "react";
import { Link } from "react-router-dom";
export default function Button({ name, link, color, countedQty }) {
  const style = `btn w-full btn-${color}`;
  // const handleOnClick = (e) => {
  //   e.preventDefault();
  //   nClick={handleOnClick}
  // };

  return (
    <div className="card-actions w-full justify-center flex">
      <Link to={link} className="w-4/5">
        <button className={style}>{name}</button>
      </Link>
    </div>
  );
}
