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
      <div className="flex gap-5 justify-center flex-wrap mt-10">
        {myBlogData.map((post) => (
          <BlogDetails post={post} key={post.id}></BlogDetails>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
