import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaSign, FaTasks, FaUser } from "react-icons/fa";

import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";



const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "User Management",
    icon: <FaUser />,
    exact: true,
    subRoutes: [
      {
        path: "/users/groupMaster",
        name: "Group Master",
        
        // icon: <FaUser />,
      },
      {
        path: "/users/seatMaster",
        name: "Seat Master",
        // icon: <FaUser />,
      },
      {
        path: "/users/userMaster",
        name: "User Master",
        // icon: <FaUser />,
      },
      {
        path: "/users/reset",
        name: "Reset User Password",
        // icon: <FaUser />,
      },
      {
        path: "/users/changePass",
        name: "Change Admin Password",
        // icon: <FaUser />,
      }]
    },
    {
      path: "/role",
      name: "Role Management",
      icon: <FaTasks />,
      exact: true,
      subRoutes: [
        {
          path: "/role/roleMaster",
          name: "Role Master",
          // icon: <FaTasks />,
        },
        {
          path: "/role/groupRoleMaster",
          name: "Group Role Master",
          // icon: <FaTasks />,
        },
        {
          path: "/role/roleMenuMaster",
          name: "Role Menu Master",
          // icon: <FaTasks />,
        },
        {
          path: "/role/seatRoleMaster",
          name: "Seat Role Master",
          // icon: <FaTasks />,
        },
        {
          path: "/role/seatPermissionMaster",
          name: "Seat Permission Master",
          // icon: <FaTasks />,
        }]
      },

      {
        path: "/log",
        name: "Log Management",
        icon: <FaSign />,
        exact: true,
        subRoutes: [
          {
            path: "/log/UserProfile",
            name: "User Profile",
            // icon: <FaSign />,
          },
          {
            path: "/log/UserLogReport",
            name: "User Log Report",
            // icon: <FaSign />,
          },
          {
            path: "/log/UserMgmtTree",
            name: "User Mgmt Tree View",
            // icon: <FaUser />,
          },
          {
            path: "/log/SeatRoleAuditLogReport",
            name: "Seat Role Audit Log Report",
            // icon: <FaUser />,
          },
          {
            path: "/log/RoleMenuAuditLogReport",
            name: "Role Menu Audit Log Report",
            // icon: <FaUser />,
          },
          {
            path: "/log/UserAuditLogReport",
            name: "User Audit Log Report",
            // icon: <FaUser />,
          },
          {
            path: "/log/SeatPermissionAuditLogReport",
            name: "Seat Permission Audit Log Report",
            // icon: <FaUser />,
          }]
        },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  // {
  //   path: "/file-manager",
  //   name: "File Manager",
  //   icon: <AiTwotoneFileExclamation />,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },

  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    
    ],
  },
  {
    path: "/logout",
    name: "Logout",
    icon: <FaSign/>,
  },
  // {
  //   path: "/saved",
  //   name: "Saved",
  //   icon: <AiFillHeart />,
  // },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
        
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >



          <div className="top_section">
            <AnimatePresence>
            
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                
                 CDAC DELHI
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
