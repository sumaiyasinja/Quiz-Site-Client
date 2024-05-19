import { FaUserCircle } from "react-icons/fa";

const MyProfile = () => {
  return (
    <div className="container mx-auto ">
      <div className=" flex justify-end my-3">
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className=" text-white text-lg  py-2 px-2 lg:px-5 bg-light-green font-semibold rounded-3xl "
        >
          Change Password
        </button>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* add form */}
        </div>
      </dialog>

      {/* container */}
      <div className="flex flex-col md:flex-row justify-center gap-3 items-center  mt-6">
        <div className="shadow-lg flex justify-center px-5 lg:w-1/3 items-center flex-col gap-4 py-3 rounded">
          <FaUserCircle className="text-light-green text-5xl lg:text-9xl "></FaUserCircle>
          <button  className="bg-light-green text-white rounded-lg px-3 py-1">Choose File</button>
           
        </div>
        <div className="shadow-lg w-full md:px-7 lg:px-10  rounded">
          <form action="" className="space-y-2">
            <input
              type="text"
              placeholder="Name"
              name="Name"
              className="cursor-pointer w-full py-1"
            />
            <br />
            <hr />
            
            <input
              type="text"
              placeholder="User Name"
              name="userName"
              className="cursor-pointer w-full py-1"
            />
            <br />
            <hr />
            <input
              type="text"
              placeholder="Email"
              name="Email"
              className="cursor-pointer w-full py-1"
            />
            <br />
            <hr />
            <div className="flex flex-col md:flex-row md:justify-end py-2 gap-4">
              <button className=" text-white tmd:ext-lg   px-3 py-1 lg:px-5 bg-light-green font-medium rounded-3xl ">
                Save Changes
              </button>
              <button className=" text-white md:text-lg  px-3 py-1 lg:px-5 bg-my-red font-medium rounded-3xl ">
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
