import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root'
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from './../Home/Home';
import UserDashboard from "../layouts/Dashboard/DashboardRoot.jsx";
import DashboardHome from "../Home/DashboardHome";
import Exercise from "../pages/Exercise/Exercise";
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";
import MyProfile from "../pages/MyProfile/MyProfile.jsx";
import TeamManagement from "../pages/TeamManagement/TeamManagement.jsx";
import Login from './../pages/Login/Login';
import DashboardRoot from "../layouts/Dashboard/DashboardRoot.jsx";
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
            element : <Login></Login>
        },
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardRoot />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/dashboard",
            element : <DashboardHome></DashboardHome>
        },
        {
            path: "/dashboard/exercise",
            element : <Exercise></Exercise>
        },
        {
            path: "/dashboard/TeamManagement",
            element : <TeamManagement></TeamManagement>
        },
        {
            path: "/dashboard/leaderboard",
            element : <LeaderBoard></LeaderBoard>
        },
        {
            path: "/dashboard/profile",
            element : <MyProfile></MyProfile>
        },
    ]
  },
]);
export default router;
