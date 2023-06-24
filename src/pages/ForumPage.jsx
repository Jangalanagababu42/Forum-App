import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { forumData } from "../components/Data";
import ForumCard from "../components/ForumCard";

function ForumPage() {
  const { postId } = useParams();
  console.log(postId, "postId");
  const singlePost = forumData.posts.find((data) => data.postId === postId);
  console.log(singlePost, "s");
  return (
    <div className="grid col-span-7 justify-items-center">
      <Link to="/">Back</Link>
      <ForumCard post={singlePost} comment={true} />
    </div>
  );
}

export default ForumPage;
