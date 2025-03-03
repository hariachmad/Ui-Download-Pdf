import { format } from "date-fns";
import { useContext, useState } from "react";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateContext } from "../context/DateContext";
import moment from 'moment';

export const DateRangePickerComp = () => {
  const { dateRange, setDateRange} = useContext(DateContext);

  const handleSelect = (ranges) => {
    console.log("range1= ",ranges.range1)
    const { startDate,endDate } = ranges.range1; 
    setDateRange({
        startDate : moment(startDate).format('YYYY-MM-DD').toString(),
        endDate : moment(endDate).format('YYYY-MM-DD').toString()
    });
  };

  return (
    <div>
      <DateRangePicker ranges={[dateRange]} onChange={handleSelect} />
    </div>
  );
};
