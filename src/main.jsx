import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { DateProvider } from "./context/DateContext.jsx";
import { TpgProvider } from "./context/tpgContext.jsx";
import { SelectedTpgProvider } from "./context/SelectedTpgContext.jsx";

createRoot(document.getElementById("root")).render(
  <SelectedTpgProvider>
    <AuthProvider>
      <DateProvider>
        <TpgProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </TpgProvider>
      </DateProvider>
    </AuthProvider>
  </SelectedTpgProvider>
);
