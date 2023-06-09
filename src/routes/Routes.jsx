import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import SignUpPage from "../pages/Signup/Singup";
import ErrorPage from "../pages/Error/Error";
import Root from "../layout/Root";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "instructors",
        element: <Instructor />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default router;
