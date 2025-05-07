import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate, useNavigate } from "react-router";

export const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-sm shadow-md transition duration-300 ease-in-out"
      >
        Logout
      </button>
    </>
  );
};
