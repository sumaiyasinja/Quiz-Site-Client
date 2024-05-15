
const LeaderBoard = () => {
    return (
        <div className="container mx-auto">
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
        <td><img src="" alt="user image" /></td>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        {/* <th>2</th> */}
        <td><img src="" alt="user image" /></td>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        {/* <th>3</th> */}
        <td><img src="" alt="user image" /></td>
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

export default LeaderBoard;