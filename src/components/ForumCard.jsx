import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faShareNodes,
  faBookmark,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useForum } from "./Context";
function ForumCard({ post, comment }) {
  const [color, setColor] = useState("none");
  const { getVotes, upVoteHandler, downVoteHandler } = useForum();
  //   const [comments, showComments] = useState(false);

  return (
    <div className="flex flex-col max-w-lg shadow md rounded-md m-5 p-5">
      <div className="flex flex-row  m-5 p-5 ">
        <div className="flex flex-col mr-2">
          <div>
            <FontAwesomeIcon
              icon={faArrowUp}
              onClick={() => upVoteHandler(post.postId)}
              style={{
                color: post.upvotes > post.downvotes ? "blueviolet" : "none",
              }}
            />
          </div>
          <div>{getVotes(post.upvotes, post.downvotes)}</div>
          <div>
            <FontAwesomeIcon
              icon={faArrowDown}
              onClick={() => downVoteHandler(post.postId)}
              style={{
                color: post.upvotes < post.downvotes ? "blueviolet" : "none",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-row m-5">
            <div className="rounded-full h-10 w-10">
              <img src={post.picUrl} alt="pic" />
            </div>
            <div>
              <p>
                Posted by <span className="text-primary">@{post.username}</span>{" "}
              </p>
            </div>
            <div>1m</div>
          </div>
          <h1 className="font-semibold text-2xl">{post.post}</h1>
          <div className="flex flex-row m-2">
            {post.tags.map((el) => (
              <p className="inline text-primary bg-offwhite m-1 rounded-lg p-2 text-sm">
                {el}
              </p>
            ))}
          </div>
          <div>{post.postDescription}</div>
          <div className="flex flex-row justify-evenly p-2 m-3  ">
            <Link to={`/${post.postId}`}>
              <FontAwesomeIcon
                icon={faComment}
                style={{ cursor: "pointer" }}
                // onClick={() => showComments(true)}
              />
            </Link>
            <FontAwesomeIcon icon={faShareNodes} />
            <FontAwesomeIcon
              icon={faBookmark}
              style={{ color: color, cursor: "pointer" }}
              onClick={() => setColor("red")}
            />
          </div>
        </div>
      </div>
      {comment &&
        post.comments.map((cmt) => (
          <>
            <div className="flex flex-row">
              <div className="rounded-full h-10 w-10">
                <img src={cmt.picUrl} alt="pic" />
              </div>
              <div className="flex flex-col m-5">
                <div className="flex flex-row">
                  <p>
                    {cmt.username}
                    <span className="text-primary">@{cmt.username}</span>{" "}
                  </p>
                  <div>1m</div>
                </div>
                <div className="flex flex-row">
                  <p>
                    Replying to
                    <span className="text-primary">@{post.username}</span>{" "}
                  </p>
                </div>
                <div className="flex flex-row">
                  <p>{cmt.comment}</p>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default ForumCard;
