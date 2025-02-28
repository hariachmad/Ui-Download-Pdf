import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/authContext";

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
  const [selectedMonth,setSelectedMonth] = useState(new Date());

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
      <div className="rounded overflow-hidden shadow-lg w-[40%] h-[50vh] bg-white flex flex-col items-center">
        <div className="mt-[3rem] text-2xl font-bold">DOWNLOAD PDF REPORT</div>
        <div className="flex flex-row items-center h-7 mt-6 gap-8">
          <div className="h-fit ">Pilih Bulan : </div>
          <DatePicker
            selected={selectedMonth} // Tanggal yang dipilih
            onChange={(month) => handleMonthChange(month)} // Fungsi untuk mengupdate state
            className="border-gray-200 border-2 rounded-md h-10 text-center shadow-md "
            showMonthDropdown
            dateFormat="MM/yyyy"
            placeholderText="Pilih Bulan"
            showMonthYearPicker
          />
        </div>
        <div className="flex flex-row items-center h-7 mt-6 gap-20">
          <div className="h-fit ">IDK : </div>
          <input
            disabled
            // onChange={(e) => handleIdkChange(e.target.value)}
            className="border-gray-200 border-2 rounded-md h-10 text-center shadow-md bg-gray-200 text-gray-400 "
            value={idk}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-7"
        >
          Download PDF
        </button>
      </div>
    </>
  );
};
