import { Login } from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/main"
          element={<PrivateRoute isAuth={isAuth} />}
        >
          <Route index element={<Main />} />
        </Route> */}
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
