import { useContext} from "react";
import { TpgContext } from "../context/tpgContext.jsx.bal";
import { DateContext } from "../context/DateContext";
import moment from "moment";
import { SelectedTpgContext } from "../context/selectedTpgContext";

export const SelectTpg = () => {
  const { tpg, setTpg } = useContext(TpgContext);
  const { dateRange, setDateRange } = useContext(DateContext);
  const {selectedTpg,setSelectedTpg} = useContext(SelectedTpgContext);

  const getMonthStartDate = () => {
    const year = new Date(dateRange.startDate).getFullYear();
    const month = new Date(dateRange.startDate).getMonth();
    return new Date(year, month, 1);
  };

  const getMonthMiddleBeforeDate = () => {
    const year = new Date(dateRange.startDate).getFullYear();
    const month = new Date(dateRange.startDate).getMonth();
    return new Date(year, month, 15);
  };

  const getMonthMiddleAfterDate = () => {
    const year = new Date(dateRange.startDate).getFullYear();
    const month = new Date(dateRange.startDate).getMonth();
    return new Date(year, month, 16);
  };

  const getMonthEndDate = () => {
    const year = new Date(dateRange.startDate).getFullYear();
    const month = new Date(dateRange.startDate).getMonth();
    return new Date(year, month + 1, 0);
  };

  const handleTpgChange = (event)=>{
    setSelectedTpg(event.target.value);
  }

  const handlePeriodeChange = (event) => {
    switch (event.target.value) {
      case "periode-1":
        setDateRange({
          startDate: moment(getMonthStartDate())
            .format("YYYY-MM-DD")
            .toString(),
          endDate: moment(getMonthMiddleBeforeDate())
            .format("YYYY-MM-DD")
            .toString(),
        });
        break;
      case "periode-2":
        setDateRange({
          startDate: moment(getMonthMiddleAfterDate())
            .format("YYYY-MM-DD")
            .toString(),
          endDate: moment(getMonthEndDate()).format("YYYY-MM-DD").toString(),
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <section>
        <div className="w-full max-w-3xl mt-4">
          <div className="flex flex-row gap-7">
            <div className="flex flex-row items-center w-full">
              <label
                htmlFor="countries"
                className="text-sm font-medium text-gray-700 w-[30%] "
              >
                PILIH TPG :
              </label>
              <select
                onChangeCapture={handleTpgChange}
                id="tpg"
                className="bg-white h-9 text-gray-500 shadow-2xs mt-1 w-full px-2 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="" disabled selected>
                  -
                </option>
                {tpg.map((data, index) => (
                  <option value={data.kodeTpg} key={index}>
                    {data.namaTpg}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full flex flex-row items-center">
              <label
                htmlFor="countries"
                className="block text-sm font-medium text-gray-700 w-[50%]"
              >
                PILIH PERIODE :
              </label>
              <select
                onChangeCapture={handlePeriodeChange}
                id="tpg"
                className="bg-white shadow-2xs text-gray-500 mt-1 block w-full px-2 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="" disabled selected>
                  -
                </option>
                <option value="periode-1">PERIODE 1</option>
                <option value="periode-2">PERIODE 2</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
