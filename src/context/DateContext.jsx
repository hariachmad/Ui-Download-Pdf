import moment from "moment";
import { createContext, useContext, useState } from "react";

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [dateRange, setDateRange] = useState({
    startDate: moment(new Date()).format("YYYY-MM-DD").toString(),
    endDate: moment(new Date()).format("YYYY-MM-DD").toString(),
  });

  return (
    <DateContext.Provider value={{ dateRange, setDateRange }}>
      {children}
    </DateContext.Provider>
  );
};
