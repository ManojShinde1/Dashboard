import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

import Analytics from "./pages/Analytics";

import Setting from "./pages/Setting";
import GroupMaster from "./pages/subMenu/UserManagement/GroupMaster";
import SeatMaster from "./pages/subMenu/UserManagement/SeatMaster";
import UserMaster from "./pages/subMenu/UserManagement/UserMaster";
import ResetPass from "./pages/subMenu/UserManagement/ResetPass";
import ChangeAdminPass from "./pages/subMenu/UserManagement/ChangeAdminPass";
import RoleMaster from "./pages/subMenu/RoleManagement/RoleMaster";
import GroupRoleMaster from "./pages/subMenu/RoleManagement/GroupRoleMaster";
import RoleMenuMaster from "./pages/subMenu/RoleManagement/RoleMenuMaster";
import SeatRoleMaster from "./pages/subMenu/RoleManagement/SeatRoleMaster";
import SeatPermissionMaster from "./pages/subMenu/RoleManagement/SeatPermission";
import Logout from "./pages/subMenu/Logout";
import UserProfile from "./pages/subMenu/LogManagement/UserProfile";
import UserLogReport from "./pages/subMenu/LogManagement/UserLogReport";
import UserMgmtTree from "./pages/subMenu/LogManagement/UserMgmtTree";
import SeatRoleAudit from "./pages/subMenu/LogManagement/SeatRoleAudit";
import RoleMenuAudit from "./pages/subMenu/LogManagement/RoleMenuAudit";
import UserAudit from "./pages/subMenu/LogManagement/UserAudit";
import SeatPermissionAudit from "./pages/subMenu/LogManagement/SeatPermissionAudit";

function App() {
  return (
    
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
    
          {/* <Route path="/analytics" element={<Analytics />} /> */}

          <Route path="/settings" element={<Setting />} />

          {/* Sub User Master route */}
          <Route path="/users/groupMaster" element={<GroupMaster />} />
          <Route path="/users/SeatMaster" element={<SeatMaster />} />
          <Route path="/users/UserMaster" element={<UserMaster />} />
          <Route path="/users/Reset" element={<ResetPass />} />
          <Route path="/users/changePass" element={<ChangeAdminPass />} />

          {/* Sub Role Master route */}
          <Route path="/role/RoleMaster" element={<RoleMaster />} />
          <Route path="/role/GroupRoleMaster" element={<GroupRoleMaster />} />
          <Route path="/role/RoleMenuMaster" element={<RoleMenuMaster />} />
          <Route path="/role/RoleMenuMaster" element={<RoleMenuMaster />} />
          <Route path="/role/SeatRoleMaster" element={<SeatRoleMaster />} />
          <Route path="/role/SeatPermissionMaster" element={<SeatPermissionMaster />} />

          {/* Sub Log Master Route */}
          <Route path="/log/UserProfile" element={<UserProfile />} />
          <Route path="/log/UserLogReport" element={<UserLogReport />} />
          <Route path="/log/UserMgmtTree" element={<UserMgmtTree />} />
          <Route path="/log/SeatRoleAudit" element={<SeatRoleAudit />} />
          <Route path="/log/RoleMenuAudit" element={<RoleMenuAudit />} />
          <Route path="/log/UserAudit" element={<UserAudit />} />
          <Route path="/log/SeatPermissionAudit" element={<SeatPermissionAudit />} />


          <Route path="/Logout" element={<Logout />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
