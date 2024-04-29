import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root'
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from './../Home/Home';
import UserDashboard from "../layouts/Dashboard/UserDashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element : <Home></Home>
        },
        {
            path: "/login",
            element : <Home></Home>
        },
    ]
  },
  {
    path: "/dashboard",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/dashboard",
            element : <UserDashboard></UserDashboard>
        },
    ]
  },
]);
export default router;
