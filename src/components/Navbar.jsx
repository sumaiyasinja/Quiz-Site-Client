import logoText from "../assets/logo -Text.png"
import logoSymbol from "../assets/logo - Symbol.png"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-center space-y-2 ">
      <div className="flex gap-3 items-center">
        <img className="w-14" src={logoSymbol} alt="" />
        <img className="w-36" src={logoText} alt="" />
      </div>
      <div className="flex justify-between items-center text-center py-3 gap-4 ">
        <button className="  text-white py-3 px-7 hover:bg-[#063B5A]  font-bold shadow-lg rounded-full bg-[#063B6D]">
          Get Started
        </button>
        <button className="   text-white py-3 px-7 hover:bg-[#54C980]   font-bold shadow-lg rounded-full bg-[#54C999]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
