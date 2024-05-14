import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/DashboardNavbar";
import Sidebar from "./Sidebar";

const DashboardRoot = () => {
  return (
    <div className="h-screen">
      <DashboardNavbar></DashboardNavbar>
      <div className="grid grid-cols-6 pt-9 lg:pt-12 h-[90%]">
        {/* sidebar */}
        <div className=" h-full">
          <Sidebar></Sidebar>
        </div>
        {/* varibale container */}
        <div className="col-span-5 h-full">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardRoot;
