import React from "react";
import SideBar from "../components/SideBar";
import SortBar from "../components/SortBar";
import ForumData from "../components/ForumData";

function Homepage() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="grid col-span-3">
        <SideBar />
      </div>
      <ForumData />
      <div className="grid col-span-2 items-start">
        <SortBar />
      </div>
    </div>
  );
}

export default Homepage;
