const Modal = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
     <div className="pt-5 pb-5 md:pt-14 md:pb-7 px-5 md:px-20 flex flex-col space-y-4">

     <div >
            <h3 className="font-medium text-[#54C999] text-center text-xl md:text-2xl">
            Do you want to start a new Practice Quiz?
          </h3>
          </div>
          <div className="flex justify-around items-center py-6">
            <button className="  text-white py-3 px-12 bg-semilight-green  font-bold shadow-lg rounded-full hover:bg-[#54C999] ">
              Yes
            </button>
            <button className=" text-white py-3 px-12 bg-dark-purple hover:bg-[#063B5A] font-bold shadow-lg rounded-full ">
              No
            </button>
          </div>
     </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
