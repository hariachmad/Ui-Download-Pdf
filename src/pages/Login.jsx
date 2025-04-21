import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router";

export const Login = () => {
  const [idk, setIdk] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try{
        const response = await fetch(import.meta.env.VITE_BACKEND_URL+"/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idk, password }),
          });
          const data = await response.json();
          
          
          if (response.ok) {            
            login(data["access_token"], data["user"],data["idk"]);
            navigate("/main");
          } else {
            alert("Login gagal");
          }
    }catch(err){
        alert("Login gagal "+err);
    }   
    
  };

  function validateNumberInputPassword(event) {
    const input = event.target;
    const value = input.value;
    let inputPassword;
    if (isNaN(value)) {
      inputPassword = document.getElementById("password");
      inputPassword.value = value.slice(0, -1);
    }
    setPassword(event.target.value);
  }

  function validateNumberInputIdk(event) {
    const input = event.target;
    const value = input.value;
    let inputIdk;
    if (isNaN(value)) {
      inputIdk = document.getElementById("idk");
      inputIdk.value = value.slice(0, -1);
    }
    setIdk(event.target.value);
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-950 to-green-200 flex flex-col justify-center">
      <img
        className="absolute right-4 top-2 w-42"
        src="logo-perhutani.png"
      ></img>
      <div className="Container ml-[100px] mt-[-30px]">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-xl overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-[url('Register-Background.jpg')]"></div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-4xl mb-10 font-bold">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mt-5">
                <input
                  onInput={(event) => {
                    validateNumberInputIdk(event);
                  }}
                  id="idk"
                  name="username"
                  type="text"
                  placeholder="IDK"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  onInput={(event) => {
                    validateNumberInputPassword(event);
                  }}
                  type="password"
                  id="password"
                  placeholder="PIN"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5"></div>
              <div className="mt-5">
                <button
                  id="submit"
                  type="submit"
                  className="w-full bg-[#1E2538] py-3 text-center text-white"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
