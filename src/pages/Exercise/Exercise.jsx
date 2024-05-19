import { NavLink } from "react-router-dom";

const Exercise = () => {
  return (
    <div className=" text-center flex items-center justify-center h-full">
      <NavLink
        to="/exercise"
        className=" text-white text-lg  py-2 px-2 md:px-4 lg:px-5 bg-light-green font-semibold rounded-3xl "
      >
        Start Practice Session
      </NavLink>
    </div>
  );
};

export default Exercise;
