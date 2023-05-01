import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/mainRoute";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const theme: any = {
  dark: {
    primary: "#000",
    text: "#fff"
  },
  light: {
    primary: "#fff",
    text: "#000"
  },
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <RouterProvider router={mainRoute} /></ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
