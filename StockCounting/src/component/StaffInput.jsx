import React, { useEffect, useState, useContext } from "react";
import { readData } from "../api/Read";
import staffContext from "../context/staffContext";
import { motion } from "framer-motion";
export default function StaffInput() {
  const { staff, setStaff, location } = useContext(staffContext);
  const [filteredStaff, setFilteredStaff] = useState([]); // 필터링된 직원 목록을 저장할 상태 추가
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleChange = (e) => {
    setStaff(e.target.value);
  };

  useEffect(() => {
    readData()
      .then((data) => {
        const filtered = data.filter((item) => item.location === location);

        setFilteredStaff(filtered);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [location]);

  useEffect(() => {
    setSelectedLocation(location);
  }, [location]);

  return (
    <>
      <select
        className="select select-primary w-full max-w-xs select-md"
        onChange={handleChange}
        value={staff}
      >
        <option disabled value="">
          Select Name
        </option>
        {/* 선택된 로케이션에 따라 필터링된 직원 목록을 맵핑하여 표시 */}
        {filteredStaff.map((item, index) => (
          <option
            key={index}
            value={item.name}
            className="flex justify-center text-center hover:bg-info-500 hover:text-white overflow-scroll "
          >
            {item.name}
          </option>
        ))}
      </select>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row gap-5">
          <p className="font-bold  p-3 ">
            Staff: <span className="text-info">{staff}</span>
          </p>
          <p className="font-bold  p-3 ">
            Location:
            <span className="text-primary"> {selectedLocation}</span>
          </p>
        </div>
      </motion.div>
    </>
  );
}
