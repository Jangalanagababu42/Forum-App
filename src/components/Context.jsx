import React, { createContext, useContext, useState } from "react";
import { forumData } from "./Data";
const ForumContext = createContext();

function Provider({ children }) {
  const getVotes = (upvotes, downvotes) => {
    let votes = upvotes - downvotes;
    return votes;
  };

  const [forumdata, showForumdata] = useState(forumData.posts);
  const sortedMethod = (name) => {
    if (name === "MostVotes") {
      let mostvoted = [...forumdata].sort((a, b) => b.upvotes - a.upvotes);
      showForumdata(mostvoted);
    } else if (name === "latest") {
      let latest = [...forumdata].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );

      showForumdata(latest);
    }
  };
  const upVoteHandler = (id) => {
    const upvotefilter = forumdata.map((post) =>
      post.postId === id ? { ...post, upvotes: post.upvotes + 1 } : post
    );

    showForumdata(upvotefilter);
  };

  const downVoteHandler = (id) => {
    const downvotefilter = forumdata.map((post) =>
      post.postId === id ? { ...post, downvotes: post.downvotes + 1 } : post
    );

    showForumdata(downvotefilter);
  };

  return (
    <ForumContext.Provider
      value={{
        getVotes,
        sortedMethod,
        forumdata,
        upVoteHandler,
        downVoteHandler,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
}
const useForum = () => useContext(ForumContext);
export { useForum, Provider };
