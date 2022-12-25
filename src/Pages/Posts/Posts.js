import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import IndividualPostDetails from "../IndividualPostDetails/IndividualPostDetails";

const Posts = () => {
  const postData = useLoaderData().data;
  const [PostDetails, setPostDetails] = useState([]);
  useEffect(() => {
    const matched = postData.filter((item) =>
      window.location.href.includes(item.id)
    );
    setPostDetails(matched);
  }, [postData]);
  console.log(PostDetails);

  return (
    <div>
      {PostDetails.map((postItem) => (
        <IndividualPostDetails
          postItem={postItem}
          key={postItem.id}
        ></IndividualPostDetails>
      ))}
    </div>
  );
};

export default Posts;
