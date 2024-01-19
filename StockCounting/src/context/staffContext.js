import React, { createContext, useState } from "react";

const staffContext = createContext();

export function StaffContextProvider({ children }) {
  const [staff, setStaff] = useState([]);
  const [location, setLocation] = useState();
  const [barcode, setBarcode] = useState("");
  const [bayLocation, setBayLocation] = useState();
  return (
    <staffContext.Provider
      value={{
        staff,
        setStaff,
        location,
        setLocation,
        barcode,
        setBarcode,
        bayLocation,
        setBayLocation,
      }}
    >
      {children}
    </staffContext.Provider>
  );
}

export default staffContext;
