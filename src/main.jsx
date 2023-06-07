// external module
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// internal module
import "./index.css";
import router from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-2xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
