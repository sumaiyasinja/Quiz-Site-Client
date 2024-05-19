const TeamManagement = () => {
  // only for Admin user
  return (
    <div className="">
      <div className="container mx-auto">
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
              {/* <th>1</th> */}

              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              {/* <th>2</th> */}

              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              {/* <th>3</th> */}

              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamManagement;
