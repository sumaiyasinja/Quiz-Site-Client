import { NavLink } from "react-router-dom";
import logo from "../../assets/logo - Symbol.png";
import { FaRegCircleUser,FaUsers } from "react-icons/fa6";
import { IoBarbell ,IoBarChart } from "react-icons/io5";



const Sidebar = () => {
  return (
    <div className="relative py-7 shadow-xl h-full">
      <ul className="flex flex-col justify-between items-center gap-2 text-center">
        <li>
          <NavLink
            style={({ isActive,   }) => {
              return {
                backgroundColor: isActive ? "#54C999" : "",
                color: isActive ? "white" : "",
              };
            }}
          
            to="/dashboard/exercise"
            className="flex items-center gap-1 md:gap-2 hover:text-white text-sm md:text-base lg:text-lg  py-2 px-2 lg:px-5 hover:bg-light-green font-semibold rounded-lg text-light-green"
          >
            <IoBarbell />

            <p>Exercises</p>
          </NavLink>
        </li>
        <li>
          <NavLink
          style={({ isActive,   }) => {
            return {
              backgroundColor: isActive ? "#54C999" : "",
              color: isActive ? "white" : "",
            };
          }}
            to="/dashboard/TeamManagement"
            className="flex items-center gap-1 md:gap-2 hover:text-white text-sm md:text-base lg:text-lg  py-2 px-2 lg:px-5 hover:bg-light-green font-semibold rounded-lg text-light-green"
          >
            <FaUsers />

            <p>Team Management</p>
          </NavLink>
        </li>
        <li>
          <NavLink
          style={({ isActive,   }) => {
            return {
              backgroundColor: isActive ? "#54C999" : "",
              color: isActive ? "white" : "",
            };
          }}
            to="/dashboard/leaderboard"
            className="flex items-center gap-1 md:gap-2 hover:text-white text-sm md:text-base lg:text-lg  py-2 px-2 lg:px-5 hover:bg-light-green font-semibold rounded-lg text-light-green"
          >
            <IoBarChart />

            <p>Leaderboard</p>
          </NavLink>
        </li>
        <li>
          <NavLink
          style={({ isActive,   }) => {
            return {
              backgroundColor: isActive ? "#54C999" : "",
              color: isActive ? "white" : "",
            };
          }}
            to="/dashboard/profile"
            className="flex  items-center gap-1 md:gap-2  hover:text-white text-sm md:text-base lg:text-lg  py-2 px-2 lg:px-5 hover:bg-light-green font-semibold rounded-lg text-light-green"
          >
            <FaRegCircleUser />
            <p> My Profile</p>
          </NavLink>
        </li>
      </ul>
      <div className=" max-w-28 md:max-w-44 absolute bottom-0 right-0  ">
        <img className="opacity-20 md:opacity-40 " src={logo} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
