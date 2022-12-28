import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
// import BlogDetails from "./BlogDetails";
import PublishBlogDetails from "./PublishBlogDetails";
const PublishBlog = () => {
  const [searchItems, setSearchItems] = useState("");
  const { data: publishBlogData = [] } = useQuery({
    queryKey: ["publishBlog"],
    queryFn: async () => {
      const res = await fetch(
        "https://blog-plaza-server.vercel.app/publishBlog"
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(publishBlogData);

  return (
    <div>
      {/* <h1 className="text-center mt-10 font-bold text-2xl">My Blogs</h1> */}
      <div className="flex justify-center items-center text-white my-5">
        <form>
          <input
            className="form-input"
            type="text"
            onChange={(e) => {
              setSearchItems(e.target.value);
            }}
            placeholder="Search"
          />
          <button className="btn btn-sm ml-2">Search</button>
        </form>
      </div>
      <div className="flex gap-5 justify-center flex-wrap mt-5">
        {publishBlogData
          .filter((post) => {
            if (searchItems === "") {
              return post;
            } else if (
              post.blogText.toLowerCase().includes(searchItems.toLowerCase()) ||
              post.title.toLowerCase().includes(searchItems.toLowerCase()) ||
              post.tags.toLowerCase().includes(searchItems.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post) => (
            <PublishBlogDetails post={post} key={post._id}></PublishBlogDetails>
          ))}
      </div>
    </div>
  );
};

export default PublishBlog;
