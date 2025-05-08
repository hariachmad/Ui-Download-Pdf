import { useContext, useEffect } from "react";
import { FormCard } from "../components/FormCard";
import { AuthContext } from "../context/AuthContext";
import { SelectTpg } from "../components/SelectTpg";
import { TpgContext } from "../context/tpgContext";
import axios from "axios";
import { Logout } from "../components/Logout";

export const Main = () => {
  const { user, npk } = useContext(AuthContext);
  const { setTpg } = useContext(TpgContext);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://157.230.38.147:4000/tpg/${npk}`,
        {
          headers: {
            Authorization: `Bearer parametrik`,
          },
        }
      );
      console.log(response.data);
      setTpg(response.data);
    } catch (error) {
      console.error("Error fetching data : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-green-950 to-green-200 h-screen w-screen">
        <section className="header rounded-b-sm h-[15vh] bg-white shadow-2xl flex justify-between items-center px-5 ">
          <img className="w-60 h-15" src="/logo-perhutani.png"></img>
          <h2 className="absolute right-8 top-15">Selamat Datang, {user}</h2>
          <div className="mb-10">
            <Logout></Logout>
          </div>
        </section>
        <section className="content flex justify-center mt-[20px]">
          <FormCard></FormCard>
        </section>
      </div>
    </>
  );
};
