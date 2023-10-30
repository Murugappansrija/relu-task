import React from "react";
import "./navigation.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
// import StarsOutlinedIcon from '@mui/icons-material/StarsOutlinedOutlined';
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Navigation = () => {
  return (
    <div className="sidenav">
      <div className="logodiv">
        <h1 className="logos">LOGO</h1>
      </div>

      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeOutlinedIcon />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <NotificationsOutlinedIcon />
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderOutlinedIcon />
          <span>Shope</span>
        </button>
        <button className="sidenav__button">
          <EmailOutlinedIcon />
          <span>Conversation</span>
        </button>
        <button className="sidenav__button">
          <WalletOutlinedIcon />
          <span>Wallet</span>
        </button>
        <button className="sidenav__button">
          <StarsOutlinedIcon />
          <span>Subscription</span>
        </button>
        <button className="sidenav__button">
          <Person2OutlinedIcon />
          <span>My Profile</span>
        </button>
        <button className="sidenav__button">
          <SettingsOutlinedIcon />
          <span>Settings</span>
        </button>
         <div className="sidenav__more"> 
        <button className="sidenav__button">
          <LogoutOutlinedIcon />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
       </div> 
       <div>
        <span className="extra">2022©logo name</span>
        <span className="extra">Developed by ivan Infotech</span>
       </div>
    
    </div>
  );
};

export default Navigation;
