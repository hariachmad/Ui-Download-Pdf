import { useContext } from "react";
import { FormCard } from "../components/FormCard";
import { AuthContext } from "../context/authContext";

export const Main = () => {
  const {user} = useContext(AuthContext);
  return (
    <>
      <div className="bg-gradient-to-r from-green-950 to-green-200 h-screen w-screen">
        <section className="header rounded-b-md h-[15vh] bg-white shadow-2xl flex justify-between items-center px-5 ">
          <img className="w-60 h-15" src="/logo-perhutani.png"></img>
          <h2 className="absolute right-8 top-15">Selmat Datang, {user}</h2>
        </section>
        <section className="content flex justify-center mt-[20px]">
          <FormCard></FormCard>
        </section>
      </div>
    </>
  );
};
