import { IoStar } from "react-icons/io5";

const LeaderBoard = () => {
    return (
        <div className="w-full md:w-[90%] lg:w-[85%] mx-auto">
            <div className="">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th className="py-2 text-base text-white bg-light-green">Image</th>
        <th className="py-2 text-base text-white bg-light-green">| Name</th>
        <th className="py-2 text-base text-white bg-light-green">| Score</th>
        <th className="py-2 text-base text-white bg-light-green">| Rank</th>
      </tr>
    </thead>
    <tbody>
        {/* todo: prop component */}
        {/* todo: pagination : 6 row max*/}
      {/* row 1 */}
      <tr>
        {/* <th>1</th> */}
        <td><img className="w-10 rounded-full" src="https://i.ibb.co/gtn8JyZ/Rectangle-6.png" alt="user image" /></td>
        <td>Cy Ganderton</td>
        <td className="flex items-center justify-start gap-2 "> <IoStar className="text-[#FFC107]"></IoStar> 85</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        {/* <th>2</th> */}
        <td><img className="w-10 rounded-full" src="https://i.ibb.co/gtn8JyZ/Rectangle-6.png" alt="user image" /></td>
        <td>Hart Hagerty</td>
        <td className="flex items-center justify-start gap-2 "> <IoStar className="text-[#FFC107]"></IoStar> 100</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        {/* <th>3</th> */}
        <td><img className="w-10 rounded-full" src="https://i.ibb.co/gtn8JyZ/Rectangle-6.png" alt="user image" /></td>
        <td>Brice Swyre</td>
        <td className="flex items-center justify-start gap-2 "> <IoStar className="text-[#FFC107]"></IoStar> 80</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default LeaderBoard;