import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { ThemeContextProvider } from "./ThemeContext.tsx";

import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <ToastContainer />
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
