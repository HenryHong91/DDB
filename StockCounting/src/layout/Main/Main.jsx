import React from "react";
import DateTimeDisplay from "../../component/DateTimeDisplay";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { readData } from "../../api/Read";
import StaffInput from "../../component/StaffInput";
import staffContext from "../../context/staffContext";
import { motion } from "framer-motion";

import BayLocation from "../../component/BayLocation";

// import { readData } from "../api/Read";

export default function Main() {
  const { location, setLocation, staff } = useContext(staffContext);
  const [seletedLocation, setSeletedLocation] = useState([]);
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    readData()
      .then((data) => {
        const selectedLocations = data.map((item) => item.location);
        setSeletedLocation(selectedLocations);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="h-screen flex justify-center items-center gap-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card w-96 h-auto pb-10 bg-base-100 shadow-xl gap-1 justify-center ">
          <figure className="px-10 pt-10 mb-5">
            <img
              src="./image/image.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center p-0">
            <select
              className="select select-info w-full max-w-xs"
              onChange={handleChange}
              value={location}
            >
              <option disabled value="">
                Select Location
              </option>

              {seletedLocation.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          {location ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BayLocation />
              <div className="card-body items-center text-center gap-y-5">
                <StaffInput />
              </div>
            </motion.div>
          ) : null}

          {staff && location ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-actions w-full justify-center flex">
                <DateTimeDisplay />
                <Link to="/count" className="w-4/5">
                  <button
                    className="btn w-full btn-success  hover:scale-110 hover:opacity-150 font-bold"
                    style={{
                      animation: "fadeIn 1s ease-in-out",
                    }}
                  >
                    Start
                  </button>
                </Link>
              </div>
            </motion.div>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}
