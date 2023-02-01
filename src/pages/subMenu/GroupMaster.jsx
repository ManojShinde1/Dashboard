import { FaBold} from "react-icons/fa";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const GroupMaster = () => {
    return (
      
      
      <>
      
      {/* <Navbar /> */}
      {/* <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    </ul>
    </div> */}
      <h2 style={{marginTop : 25, textAlign : "center", FaWeight : FaBold}}>Group Master</h2>
      <table class="table" style={{width : 1100, marginTop : 50, alignItems : "center"}}>
        
      <thead>
        
        <tr>
          <th scope="col">#</th>
          <th scope="col">Group Name</th>
          <th scope="col">Effective Date</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Admin_Bld</td>
          <td>08-June-2015</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Admin_Test</td>
          <td>18_Sep_2018</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Fts_Group</td>
          <td>31-Mar-2017</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Group_Non_Employee</td>
          <td>1-Jan-2021</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Nhm_admin_Group</td>
          <td>8-June-2015</td>
        </tr> 
        <tr>
          <th scope="row">6</th>
          <td>Fts_Group</td>
          <td>31-Mar-2017</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Fts_Group</td>
          <td>31-Mar-2017</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Group_Non_Employee</td>
          <td>1-Jan-2021</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>Fts_Group</td>
          <td>31-Mar-2017</td>
        </tr>

      </tbody>
    </table>
    </>
    );
    
    }
    
  export default GroupMaster;
    