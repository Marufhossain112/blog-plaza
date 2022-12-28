import { useQuery } from "@tanstack/react-query";
import React from "react";
import BlogDetails from "./BlogDetails";

const MyBlog = () => {
  const { data: myBlogData = [] } = useQuery({
    queryKey: ["addBlog"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/addBlog");
      const data = await res.json();
      return data;
    },
  });
  // console.log(myBlogData);

  return (
    <div>
      <h1 className="text-center mt-10 font-bold text-2xl">My Blogs</h1>
      <div className="flex gap-5 justify-center flex-wrap mt-5">
        {myBlogData.map((post) => (
          <BlogDetails post={post} key={post._id}></BlogDetails>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
