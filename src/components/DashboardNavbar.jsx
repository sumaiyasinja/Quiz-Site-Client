import logoText from "../assets/logo -Text.png";
import logoSymbol from "../assets/logo - Symbol.png";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const DashboardNavbar = () => {
  const logout = () => {
    console.log("User logged out clicked");
  };
  return (
    <div className="flex justify-between items-center text-center space-y-2 ">
      <div className="flex gap-3 items-center">
        <img className="w-14" src={logoSymbol} alt="" />
        <img className="w-36" src={logoText} alt="" />
      </div>
      <div className="flex justify-between items-center text-center py-3 gap-4 ">
        <div className="flex flex-col items-center text-center ">
          <p className="text-sm text-black font-light">User Name</p>
          <p className="text-sm text-light-green font-light">Company Name</p>
        </div>
        {/* dropdown => logout button, */}
        {/* <div onClick={logout}> <img src="" alt="user avatar" /></div> */}
        <div className="flex  items-center text-center ">
          <FaUserCircle className="text-light-green text-4xl"></FaUserCircle>
          <IoMdArrowDropdown
            className="text-light-green text-lg"
            onClick={logout}
          ></IoMdArrowDropdown>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
