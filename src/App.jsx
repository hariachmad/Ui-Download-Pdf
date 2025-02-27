import "./App.css";
import { FormCard } from "./components/formCard";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-green-700 to-green-500 h-screen w-screen">
        <section className="header rounded-b-md h-[20vh] bg-white shadow-2xl flex justify-between items-center px-5 ">
          <img className="w-70 h-20" src="/logo-perhutani.png"></img>
        </section>
        <section className="content flex justify-center mt-[20px]">
          <FormCard></FormCard>
        </section>
      </div>
    </>
  );
}

export default App;
