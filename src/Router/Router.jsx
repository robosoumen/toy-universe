import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Resister from "../Pages/Resister";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'resister',
            element: <Resister></Resister>
        }
    ]
  },
  {
    path: "*",
    element: <div>404 error</div>,
  },
]);

export default router;
