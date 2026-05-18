import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Resister from "../Pages/Resister";
import AuthLayout from "../Layout/AuthLayout";
import CardDetails from "../Pages/CardDetails";
import PrivateRoute from "../Components/PrivateRoute";
import Profile from "../Pages/Profile";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/resister",
        element: <Resister></Resister>,
      },
    ],
  },
  {
    path: "/card-details/:id",
    element: (
      <PrivateRoute>
        <CardDetails></CardDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/toy.json"),
    hydrateFallbackElement: (
      <span className="loading loading-bars loading-xl"></span>
    ),
  },
  {
    path: "*",
    element: <div>404 error</div>,
  },
]);

export default router;
