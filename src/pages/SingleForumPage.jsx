import React from "react";
import ForumPage from "./ForumPage";
import SideBar from "../components/SideBar";

function SingleForumPage() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="grid col-span-3">
        <SideBar />
      </div>
      <ForumPage />
    </div>
  );
}

export default SingleForumPage;
