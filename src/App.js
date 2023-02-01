import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import GroupMaster from "./pages/subMenu/GroupMaster";
import SeatMaster from "./pages/subMenu/SeatMaster";
import UserMaster from "./pages/subMenu/UserMaster";
import ResetPass from "./pages/subMenu/ResetPass";
import ChangeAdminPass from "./pages/subMenu/ChangeAdminPass";
import RoleMaster from "./pages/subMenu/RoleMaster";
import GroupRoleMaster from "./pages/subMenu/GroupRoleMaster";
import RoleMenuMaster from "./pages/subMenu/RoleMenuMaster";
import SeatRoleMaster from "./pages/subMenu/SeatRoleMaster";
import SeatPermissionMaster from "./pages/subMenu/SeatPermission";

function App() {
  return (
    
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
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

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
