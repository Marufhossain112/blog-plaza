import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

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
      <h2>This is Posts Page.</h2>
    </div>
  );
};

export default Posts;
