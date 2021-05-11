import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import AppRoutes from "./routes/app.routes";
import LoadingProvider from "./contexts/loading";

ReactDOM.render(
  <React.StrictMode>
    <LoadingProvider>
      <BrowserRouter>
        <div className="container">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </LoadingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
