import { ImCross } from 'react-icons/im';
import { FiEdit } from "react-icons/fi";
import { FaCheck } from 'react-icons/fa';

const TeamManagement = () => {
  // only for Admin user
  return (
    <div className="w-full md:w-[90%] lg:w-[85%] mx-auto">

        <div className=" flex justify-end">
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className=" text-white text-base lg:text-lg  py-2 px-3 md:px-4 lg:px-5 bg-light-green font-semibold rounded-3xl "
          >
            Create New User
          </button>
          
          

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
        </div>
        <table className="table mt-5">
          {/* head */}
          <thead>
            <tr>
              <th className="py-2 text-base text-white bg-light-green">#SL</th>
              <th className="py-2 text-base text-white bg-light-green">
                | Name
              </th>
              <th className="py-2 text-base text-white bg-light-green">
                | Email
              </th>
              <th className="py-2 text-base text-white bg-light-green">
                | Status
              </th>
              <th className="py-2 text-base text-white bg-light-green">
                | Actions
              </th>
              <th className="py-2 text-base text-white bg-light-green">
                | Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {/* todo: prop component */}
            {/* todo: pagination : 6 row max*/}
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Sumaiya Sinja</td>
              <td>Sumaiya@email.com</td>
              {/* <td ><p className="bg-[#FC0005] rounded-md text-center text-white">disabled</p></td> */}
              {/* <td className='text-light-green flex items-center justify-centerS'><FaCheck /></td> */}
              <td ><p className="bg-light-green rounded-md text-center text-white">active</p></td>
              <td className='text-[#FC0005] flex items-center justify-centerS'><ImCross/></td>
              <td className=''><FiEdit /></td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>

              
              <td>Sumaiya Sinja</td>
              <td>Sumaiya@email.com</td>
              <td ><p className="bg-[#FC0005] rounded-md text-center text-white">disabled</p></td>
              {/* <td className='text-[#FC0005] flex items-center justify-centerS'><ImCross/></td> */}
              {/* <td ><p className="bg-light-green rounded-md text-center text-white">active</p></td> */}
              <td className='text-light-green flex items-center justify-centerS'><FaCheck /></td>
              <td className=''><FiEdit /></td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Sumaiya Sinja</td>
              <td>Sumaiya@email.com</td>
              {/* <td ><p className="bg-[#FC0005] rounded-md text-center text-white">disabled</p></td> */}
              {/* <td className='text-light-green flex items-center justify-centerS'><FaCheck /></td> */}
              <td ><p className="bg-light-green rounded-md text-center text-white">active</p></td>
              <td className='text-[#FC0005] flex items-center justify-centerS'><ImCross/></td>
              <td className=''><FiEdit /></td>
            </tr>
          </tbody>
        </table>
      </div>
  );
};

export default TeamManagement;
