// rfce - react functional component

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import React, { useState } from "react";
import ytLogo from "./Images/utube.png";
import avtar from "./Images/avatar.jpeg";

import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSolidVideoPlus } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";

import { BiLogOut } from "react-icons/bi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link, useSearchParams } from "react-router-dom";
import Signin from "./Signin";

function Header() {
  const [isUserLoggedIn, setIsloggedIn] = useState(
    localStorage.getItem("token") != null
  );
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("name");

    setIsloggedIn(false);
  };

  console.log("Is logged in", isUserLoggedIn);

  return (
    <div>
      <div class="header">
        <div class="header-items">
          <div class="one">
            <AiOutlineMenu class="tools" />
          </div>
          <div class="two">
            <Link to={"/"}>
              <img id="yt-logo" src={ytLogo}></img>
            </Link>
          </div>
        </div>
        
        <div class="header-items white">
          <input placeholder="Search" class="header-search white"></input>
          <button class="search-button white">
            {" "}
            <AiOutlineSearch class="search-icon white" />
          </button>
          <div class="header-mic">
            <BsFillMicFill class="search-icon white" />
          </div>
        </div>

        {isUserLoggedIn ? (
          <div class="header-items header-profile">
            <Link to={"/upload"}>
              <IoMdNotificationsOutline class="tools-right" title="Upload video" />
              <BiSolidVideoPlus class="tools-right" title="Upload video" />
            </Link>
            <img src={avtar} class="user-logo white"></img>
            <p class="user-email margin-0">{localStorage.getItem("email")}</p>
            <BiLogOut
              class="tools-right"
              title="Logout"
              onClick={() => handleLogout()}
            />
          </div>
          
        ) : (
          <div class="header-items">
            <div class="header-tools">
              <IoMdNotificationsOutline className="tools" />
              <BiSolidVideoPlus className="tools" />
            </div>
            <Link to={"/Signin"}>
              <button class="signin-btn">Sign In</button>
            </Link> = <signin />
            
          </div>
        )}
      </div>
    </div>
  );
}
<Signin />
export default Header;
