import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import SignUpPage from "../pages/Signup/Singup";
import ErrorPage from "../pages/Error/Error";
import Root from "../layout/Root";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/Instructor/InsDashboard/Dashboard";
import MyClasses from "../pages/Instructor/MyClasses/MyClasses";
import UpdateClass from "../pages/Instructor/MyClasses/UpdateClass";

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
        path: "instructors/dashboard",
        element: <Dashboard />,
      },
      {
        path: "myclasses",
        element: <MyClasses />,
      },
      {
        path: "myclasses/:id",
        element: <UpdateClass />,
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
