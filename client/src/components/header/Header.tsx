import { Link, Navigate, useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { PrimaryButton } from "../../themes/buttons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useAccount } from "@azure/msal-react";
import { useUserAccount } from "../../hooks/useAccount";
import UserProfileMenu from "../user-profile/userProfileMenu";
import { useUserRole } from "../../hooks/useRole";

export function Header() {
  const [selectedKey, setSelectedKey] = useState("home");
  const { isAuthenticated } = useUserAccount();
  const { isAdmin } = useUserRole();
  const navigate = useNavigate();

  const handleMenuClick = (e: any) => {
    setSelectedKey(e.key);
  };

  const routeToSignInPage = () => {
    navigate("/login");
  };
  const routeToSignUpPage = () => {
    navigate("/register");
  };

  return (
    <div className={style.mainHeader}>
      <div
        style={{
          backgroundColor: "black",
          fontFamily: "fantasy",
        }}
      >
        <h1 style={{ color: "white", fontWeight: "bold" }}>Rental </h1>
      </div>

      <div className="flex justify-between" style={{ width: "40%" }}>
        <Menu
          onClick={handleMenuClick}
          selectedKeys={[selectedKey]}
          mode="horizontal"
          inlineCollapsed={false}
        >
          {isAuthenticated() ? (
            <>
              <Menu.Item key="home">
                <Link to="/">Home</Link>
              </Menu.Item>

              {isAdmin() && (
                <Menu.Item key="users">
                  <Link to="/users">Users</Link>
                </Menu.Item>
              )}
              <Menu.Item key="apartments">
                <Link to="/apartments">Apartments</Link>
              </Menu.Item>
            </>
          ) : (
            <></>
          )}
        </Menu>
      </div>
      <div style={{ width: "200px flex justify-between" }}>
        {isAuthenticated() ? (
          <>
            <UserProfileMenu />
          </>
        ) : (
           
             (location.href.includes("login")==true)?(
               
               <PrimaryButton onClick={routeToSignUpPage}>
                Sign Up
               </PrimaryButton>
               
             ):(
               <PrimaryButton onClick={routeToSignInPage}>
                Sign In
               </PrimaryButton>
             )
           
          )}
      </div>
    </div>
  );
}
