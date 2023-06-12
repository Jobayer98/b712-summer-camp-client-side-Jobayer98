import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import SignUpPage from "../pages/Signup/Singup";
import Root from "../layout/Root";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/Instructor/InsDashboard/Dashboard";
import MyClasses from "../pages/Instructor/MyClasses/MyClasses";
import UpdateClass from "../pages/Instructor/MyClasses/UpdateClass";
import MySelectedClass from "../pages/User/SelectedClass/MySelectedClass";
import MyCourses from "../pages/User/MyCourses/MyCourses";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../pages/User/Payment/Checkout";
import AllClasses from "../pages/Admin/AllClasses/AllClasses";
import ManageUser from "../pages/Admin/ManageUser/ManageUser";
import ErrorPage from "../pages/Error/Error";
import PaymentHistory from "../pages/User/Payment/PaymentHistory";

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
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "myclasses",
        element: (
          <PrivateRoute>
            <MyClasses />
          </PrivateRoute>
        ),
      },
      {
        path: "myclasses/:id",
        element: (
          <PrivateRoute>
            <UpdateClass />
          </PrivateRoute>
        ),
      },
      {
        path: "allcourses",
        element: <Classes />,
      },
      {
        path: "mycourses",
        element: (
          <PrivateRoute>
            <MyCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "my-selected-classes",
        element: (
          <PrivateRoute>
            <MySelectedClass />
          </PrivateRoute>
        ),
      },

      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "allclasses",
        element: (
          <PrivateRoute>
            <AllClasses />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <ManageUser />
          </PrivateRoute>
        ),
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
