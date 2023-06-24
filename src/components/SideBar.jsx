import React from "react";
import {
  faBookmark,
  faCompass,
  faUser,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forumData } from "./Data";
function SideBar() {
  return (
    <div className="flex flex-col m-10 justify-items-start ">
      <div className="m-3">
        <FontAwesomeIcon icon={faHouse} className="mr-4" />
        <span>Home</span>
      </div>
      <div className="m-3">
        <FontAwesomeIcon icon={faCompass} className="mr-4" />
        <span>Explore</span>
      </div>
      <div className="m-3">
        <FontAwesomeIcon icon={faBookmark} className="mr-4" />
        <span>BookMarks</span>
      </div>
      <div className="m-3">
        <FontAwesomeIcon icon={faUser} className="mr-4" />
        <span>Profile</span>
      </div>
      <div className="flex flex-col bottom-0">
        <div className=" flex flex-row rounded-full h-10 w-10">
          <img src={forumData.picUrl} alt="pic" />
          <p>{forumData.name}</p>
        </div>
        <p>@{forumData.username}</p>
      </div>
    </div>
  );
}

export default SideBar;
