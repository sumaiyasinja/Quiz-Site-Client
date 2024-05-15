import { IoStar } from "react-icons/io5";

const ResultState = () => {
  return (
    <div className="container mx-auto h-screen flex items-center justify-center ">
      <div className="md:px-56  flex items-center justify-center flex-col gap-4 py-9 shadow-md border-2 border-my-gray rounded-2xl">
        <p className="text-3xl font-bold capitalize">Congratulations!</p>
        <p className="text-light-green text-3xl font-light">Exercise passed</p>
        <div className="flex items-center justify-center gap-2 font-bold text-5xl ">
          <IoStar className="text-[#FFC107]"></IoStar> 85
        </div>

        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="  text-white py-3 px-7 hover:bg-[#063B5A]  font-bold shadow-lg rounded-lg bg-[#063B6D]"
        >
          Continue
        </button>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
            <div className="card   text-neutral-content">
              <div className="card-body items-center text-center">
                <h2 className="text-3xl font-medium  text-[#222222] pb-2">
                  Do you want to start a new Practice Quiz?
                </h2>
                <div className="flex justify-around gap-3 items-center">
                  <button className="text-white py-2 px-10 hover:bg-[#063B5A]  font-bold shadow-lg rounded-lg bg-[#063B6D]">
                    Yes
                  </button>
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="text-white py-2 px-10 hover:bg-[#D0000]  font-bold shadow-lg rounded-lg bg-[#D00202]">
                      No
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ResultState;
