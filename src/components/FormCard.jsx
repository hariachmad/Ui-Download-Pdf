import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/authContext";
import { DateRangePickerComp } from "./DateRangePicker";

export const FormCard = () => {
  const { idk } = useContext(AuthContext);
  const enumMonth = [
    "jan",
    "feb",
    "mar",
    "apr",
    "mei",
    "jun",
    "jul",
    "ags",
    "sep",
    "okt",
    "nov",
    "des",
  ];

  const [month, setMonth] = useState(enumMonth[new Date().getMonth()]);
  // const [idk_, setIdk] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setMonth(enumMonth[month.getMonth()]);
  };

  // const handleIdkChange = (idk) => {
  //   setIdk(idk);
  // };

  const handleSubmit = () => {
    window.location.href = `http://157.230.38.147:4000/penerimaan-getah/${month}/idk/${idk}`;
  };

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg w-[70%] h-[75vh] bg-gray-50 flex flex-col items-center">
        <div className="mt-[1rem] mb-2.5 text-2xl font-bold">DOWNLOAD PDF REPORT</div>
        <div className="grid grid-cols-3 mt-5 gap-12">
          <div className="col-span-2">
            <DateRangePickerComp />
          </div>
          <div className="flex flex-col items-center justify-center bg-white h-[90%] rounded-lg shadow-xl p-6 max-w-sm w-full transform transition-all hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="h-fit font-bold text-3xl">IDK</div>
              <input
                disabled
                // onChange={(e) => handleIdkChange(e.target.value)}
                className="border-gray-200 mt-3 border-2 rounded-md h-10 text-center shadow-md bg-gray-200 text-gray-400 "
                value={idk}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white mt-20 font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
