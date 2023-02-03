import { FaBold} from "react-icons/fa";
const SeatMaster = () => {
  return (
    <><h2 style={{marginTop : 25, textAlign : "center", FaWeight : FaBold}}>Seat Master</h2>
    <table class="table" style={{width : 1000, marginTop : 50}}>
      
    <thead>
      
      <tr>
        <th scope="col">#</th>
        <th scope="col">Seat Name</th>
        <th scope="col">Group Associated</th>
        <th scope="col">Effective Date</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Admin_Bld</td>
        <td>Admin_Bld</td>
        <td>08-June-2015</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Admin_Test</td>
        <td>Admin_Test</td>
        <td>18_Sep_2018</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Fts_Group</td>
        <td>Nhm_Admin_Grp</td>
        <td>31-Mar-2017</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Group_Non_Employee</td>
        <td>Nhm_Employee</td>
        <td>1-Jan-2021</td>
      </tr>
      <tr>
        <th scope="row">5</th>
        <td>Nhm_admin_Group</td>
        <td>Nhm_Employee</td>
        <td>8-June-2015</td>
      </tr> 
      <tr>
        <th scope="row">6</th>
        <td>Fts_Group</td>
        <td>Fts_Group</td>
        <td>31-Mar-2017</td>
      </tr>
      <tr>
        <th scope="row">7</th>
        <td>Fts_Group</td>
        <td>Fts_Group</td>
        <td>31-Mar-2017</td>
      </tr>
      <tr>
        <th scope="row">8</th>
        <td>Group_Non_Employee</td>
        <td>Nhm_Employee</td>
        <td>1-Jan-2021</td>
      </tr>
      <tr>
        <th scope="row">9</th>
        <td>Fts_Group</td>
        <td>Fts_Group</td>
        <td>31-Mar-2017</td>
      </tr>

    </tbody>
  </table>
  </>
  );
}
  export default SeatMaster;