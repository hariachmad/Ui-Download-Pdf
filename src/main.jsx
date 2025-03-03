import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { AuthProvider } from "./context/authContext.jsx";
import { DateProvider } from "./context/DateContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <DateProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </DateProvider>
  </AuthProvider>
);
