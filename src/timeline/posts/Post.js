import React from "react";
import "./post.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import profphot from "./pexels-humphrey-muleba-2045248.png";
import dp from './pexels-ali-pazani-2613260.png'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Post = () => {
  return (
    <div className="posts">
      <form className="search">
        <input type="text" placeholder="Search here.." />
      </form>
      <div className="main-post">
        <div className="pepleposts">
          <img className="avt" src={dp}/>
          <div className="nameofuser">
            <span className="namedark">Lara Leones</span>
            <span className="loclight">@thewallart</span>
          </div>
          <MoreVertOutlinedIcon  className="moreicon"/>
        </div>
        <div className="text-content">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
          <span>Read More</span>
        </div>
        <div className="postimage">
          <img src={profphot} className="imgpost" />
        </div>
        <div className="footer-section">
          
          <FavoriteBorderOutlinedIcon className="com-btn"/><span className="cmt-count">9.8k</span>
          <ChatBubbleOutlineOutlinedIcon className="com-btn"/><span className="cmt-count">8.6k</span>
          <ShareOutlinedIcon className="com-btn"/><span className="cmt-count">7.2k</span>
          
        
          {/* <div className="like" ></div> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
