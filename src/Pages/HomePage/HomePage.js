import React, { useEffect, useState } from "react";
import PostDetails from "../PostDetails/PostDetails";
const HomePage = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  // let allPosts = [];
  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/tag/water/post?limit=10", {
      headers: {
        "app-id": "63a705516f2b848161c97870",
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data.data));
    // console.log(posts);
  }, []);
  const allPosts = posts;
  return (
    <div>
      <div className="flex gap-5 justify-center flex-wrap mt-10">
        {allPosts.map((post) => ( 
       <PostDetails post={post} key={post.id}></PostDetails> 
       ))} 
      </div>
    </div>
  );
};

export default HomePage;
