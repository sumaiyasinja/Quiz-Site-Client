import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Quiz = () => {
    const navigate = useNavigate()

    const cancelQuiz = () =>{
        Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to withdrawn the exercise?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes withdraw the exercise!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Withdrawn!",
                text: "The exercise has been withdrawn.",
                icon: "success"
              });
              navigate('/dashboard/exercise')
            }
          });
    }
  return (
    <div className=" w-9/12 mx-auto flex flex-col gap-5 py-3">
      {/* Progress bar */}
      <div className="">
        <progress
          className="progress progress-accent md:h-3"
          value="70"
          max="100"
        ></progress>
      </div>
      {/* context */}
      <div className="text-center text-dark-purple font-bold md:text-xl">
        
          Context : It&apos;s 4 pm on a Thursday, you are calling a user in
          South Spain
        
         
      </div>
      {/* question */}
      <div className="text-center text-dark-purple font-bold md:text-xl">
      Question : After the intro, the person says &quot;I had a bad
          experience in the past&quot; - what is the best way to handle this
          push?       
      </div>
      {/* quiz container */}
      <div className="flex flex-col gap-5 border-2 border-my-gray rounded-2xl md:space-y-2 md:py-5 p-3 md:px-8 ">
        {/* todo: add prop drilling here */}
        {/* option1 containers  */}
        <div className="border-2 border-my-gray font-normal rounded-2xl lg:text-xl px-5 py-2 text-dark-purple">
          Empathize with the user, share that you just spoke to another user who
          had bad past experiences who eventually changed his mind, and ask for
          more detailsmpathize with the user, share that you just spoke to
          another user who had bad past experiences who eventually changed his
          mind, and ask for more details
        </div>
        {/* option1 containers  */}
        <div className="border-2 border-my-gray font-normal rounded-2xl lg:text-xl px-5 py-2 text-dark-purple">
          SaSay in the past things were worst but now are all fixedy in the past
          things were worst but now are all fixed
        </div>
        {/* option2 containers  */}
        <div className="border-2 border-my-gray font-normal rounded-2xl lg:text-xl px-5 py-2 text-dark-purple">
          Pretend you didPretend you did not hear and dismiss the comment,
          continue with the script not hear and dismiss the comment, continue
          with the script
        </div>
        {/* option3 containers  */}
        <div className="border-2 border-my-gray font-normal rounded-2xl lg:text-xl px-5 py-2 text-dark-purple">
          Ask foAsk for details, say user is right and company is really bad at
          that, but there`&apos;`s other positivesr details, say user is right
          and company is really bad at that, but there`&apos;`s other positives
        </div>
      </div>
      {/* button container */}
      <div className="flex justify-between items-center text-center py-3 gap-4 ">
        <button onClick={cancelQuiz} className="  text-white py-3 px-7 hover:bg-[#063B5A]  font-bold shadow-lg rounded-full bg-[#063B6D]">
        Cancel
        </button>
        <button className="   text-white py-3 px-7 hover:bg-[#54C980]   font-bold shadow-lg rounded-full bg-[#54C999]">
        Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
