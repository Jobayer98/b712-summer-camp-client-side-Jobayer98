// external module
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// internal module
import "./index.css";
import router from "./routes/routes";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
