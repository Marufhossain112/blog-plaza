import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import IndividualPostDetails from "../IndividualPostDetails/IndividualPostDetails";

const Posts = () => {
  const PostDetails = useLoaderData();
  const [PostDetailsData, setPostDetailsData] = useState([PostDetails]);
  // console.log(PostDetails);

  return (
    <div>
      {PostDetailsData.map((post) => (
        <IndividualPostDetails
          post={post}
          key={post._id}
        ></IndividualPostDetails>
      ))}
    </div>
  );
};

export default Posts;
