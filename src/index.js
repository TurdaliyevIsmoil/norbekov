import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./Lang";
import { DataProvider } from "./store/contexts/DataContext";
const useDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isSmallScreen = window.matchMedia("(max-width: 1023.5px)").matches;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>
);
