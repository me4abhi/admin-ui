import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AdminPageProvider } from "./context/AdminPageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AdminPageProvider>
      <App />
    </AdminPageProvider>
  </React.StrictMode>
);

reportWebVitals();
