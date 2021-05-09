import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./routes/app.routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container">
        <AppRoutes />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
