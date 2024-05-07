import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
