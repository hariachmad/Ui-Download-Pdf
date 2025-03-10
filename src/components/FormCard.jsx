import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/authContext";
import { DateRangePickerComp } from "./DateRangePicker";
import { DateContext } from "../context/DateContext";
import axios from "axios";

export const FormCard = () => {
  const { idk } = useContext(AuthContext);
  const { dateRange, setDateRange } = useContext(DateContext);
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

  const handleSubmit = () => {
    try {
      axios
        .get(
          `http://localhost:4000/penerimaan-getah/pdf?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}&idk=${idk}`
        )
        .then((response) => {
          window.location.href = `http://localhost:4000/penerimaan-getah/pdf?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}&idk=${idk}`;
        })
        .catch((err) => {
          console.error("Error", err);
          alert("Data tidak ada. Silakan coba lagi.");
        });
    } catch (err) {
      console.error("Error", err);
      alert("Data tidak ada. Silakan coba lagi.");
    }
  };

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg w-[70%] h-[75vh] bg-gray-50 flex flex-col items-center">
        <div className="mt-[1rem] mb-2.5 text-2xl font-bold">
          DOWNLOAD PDF REPORT
        </div>
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
            <p className="my-5 text-blue-500">{`${dateRange.startDate}     -   ${dateRange.endDate}`}</p>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white mt-5   font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
