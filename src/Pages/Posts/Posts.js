import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthProvider";
import IndividualPostDetails from "../IndividualPostDetails/IndividualPostDetails";

const Posts = () => {
  const { data: commentsData = [], refetch } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await fetch("https://blog-plaza-server.vercel.app/comments");
      const data = await res.json();
      return data;
    },
  });
  console.log(commentsData);
  const { user } = useContext(AuthContext);
  console.log(user?.displayName);

  const PostDetails = useLoaderData();
  const [PostDetailsData, setPostDetailsData] = useState([PostDetails]);
  // console.log(PostDetails);
  const [comments, setComments] = useState({});
  const handleBlur = (event) => {
    const commentField = event.target.name;
    const commentText = event.target.value;
    console.log(commentField, commentText);
    const newComments = { ...comments };
    newComments[commentField] = commentText;
    setComments(newComments);
  };

  const commentsDetails = {
    comment: comments.comment,
    user: user?.displayName,
  };

  const handleComments = (event) => {
    event.preventDefault();
    // console.log(reviews);

    fetch("https://blog-plaza-server.vercel.app/comments", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(commentsDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          refetch();
          event.target.reset();
          toast.success("Comment Added Successfully");
          console.log(data);
        }
        console.log(data);
      });
  };

  return (
    <div>
      {PostDetailsData.map((post) => (
        <IndividualPostDetails
          post={post}
          key={post._id}
        ></IndividualPostDetails>
      ))}
      {/* Comments */}
      <div>
        {commentsData.map((comment) => (
          <div className="flex justify-center">
            <p className="font-semibold mr-1">{comment.user}</p>
            {"-"}
            <p className="ml-1">{comment.comment}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-3">
        <form onSubmit={handleComments}>
          <input
            type="text"
            placeholder="Add a Comment"
            className="form-input text-white"
            // onChange={}
            name="comment"
            onBlur={handleBlur}
          ></input>
          <button className="btn btn-sm ml-2">Comment</button>
        </form>
      </div>
    </div>
  );
};

export default Posts;
