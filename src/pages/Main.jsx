import { useContext } from "react";
import { FormCard } from "../components/formCard";

export const Main = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-green-950 to-green-200 h-screen w-screen">
        <section className="header rounded-b-md h-[15vh] bg-white shadow-2xl flex justify-between items-center px-5 ">
          <img className="w-60 h-15" src="/logo-perhutani.png"></img>
        </section>
        <section className="content flex justify-center mt-[20px]">
          <FormCard></FormCard>
        </section>
      </div>
    </>
  );
};
