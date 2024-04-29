import logoText from "../assets/logo -Text.png"
import logoSymbol from "../assets/logo - Symbol.png"
const DashboardNavbar = () => {
  return (
    <div className="flex justify-between items-center text-center space-y-2 ">
      <div className="flex gap-3 items-center">
        <img className="w-14" src={logoSymbol} alt="" />
        <img className="w-36" src={logoText} alt="" />
      </div>
      <div className="flex justify-between items-center text-center py-3 gap-4 ">
        <p>User Name</p>
        <p>Company Name</p>
        {/* dropdown => logout buutton, */}
        <img src="" alt="user avatar" />
        
      </div>
    </div>
  );
};

export default DashboardNavbar;
