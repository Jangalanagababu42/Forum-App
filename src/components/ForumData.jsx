import React, { useEffect, useState } from "react";
import { forumData } from "./Data";
import ForumCard from "./ForumCard";

function ForumData() {
  const [forum, showForum] = useState([]);
  useEffect(() => {
    showForum(forumData);
  }, []);

  return (
    <div className="grid col-span-7  justify-items-center ">
      <div>Latest Posts</div>
      <div>
        {forum?.posts?.map((post) => (
          <ForumCard post={post} comment={false} />
        ))}
      </div>
    </div>
  );
}

export default ForumData;
