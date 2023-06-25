import React, { useEffect, useState } from "react";
import { forumData } from "./Data";
import ForumCard from "./ForumCard";
import { useForum } from "./Context";

function ForumData() {
  const { forumdata } = useForum();

  return (
    <div className="grid col-span-7  justify-items-center ">
      <div>Latest Posts</div>
      <div>
        {forumdata?.map((post) => (
          <ForumCard post={post} comment={false} />
        ))}
      </div>
    </div>
  );
}

export default ForumData;
