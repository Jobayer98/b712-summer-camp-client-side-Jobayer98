// external module
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// internal module
import "./index.css";
import router from "./routes/routes";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div>
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
