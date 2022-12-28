import { useQuery } from "@tanstack/react-query";
import React from "react";
// import BlogDetails from "./BlogDetails";
import PublishBlogDetails from "./PublishBlogDetails";

const PublishBlog = () => {
  const { data: publishBlogData = [] } = useQuery({
    queryKey: ["publishBlog"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/publishBlog");
      const data = await res.json();
      return data;
    },
  });
  console.log(publishBlogData);

  return (
    <div>
      {/* <h1 className="text-center mt-10 font-bold text-2xl">My Blogs</h1> */}
      <div className="flex gap-5 justify-center flex-wrap mt-5">
        {publishBlogData.map((post) => (
          <PublishBlogDetails post={post} key={post._id}></PublishBlogDetails>
        ))}
      </div>
    </div>
  );
};

export default PublishBlog;
