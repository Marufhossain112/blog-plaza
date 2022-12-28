import React, { useContext, useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaRegUser } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const PostDetails = ({ post }) => {
  const [published, setPublished] = useState(false);
  const { title, image, _id, author, date, tags, blogText } = post;
  const { user } = useContext(AuthContext);
  const { data: addedBlogs = [], refetch } = useQuery({
    queryKey: ["addBlog"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/addBlog");
      const data = await res.json();
      return data;
    },
  });
  // console.log(addedBlogs);
  const [addedBlogsData, setAddedBlogsData] = useState();
  const [publishedBlog, setPublishedBlog] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/publishBlog/")
      .then((res) => res.json())
      .then((data) => setPublishedBlog(data));
  }, []);

  const handleDelete = () => {
    const agree = window.confirm(`Are you sure you want to delete: ${title}`);
    if (agree) {
      fetch(`http://localhost:5000/deleteBlog/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success("Successfully deleted");
            const remainingBlogs = addedBlogsData.filter(
              (post) => post._id !== _id
            );
            setAddedBlogsData(remainingBlogs);
          }
        });
    }
  };
  const handlePublish = () => {
    setPublished(!published);
    fetch(`http://localhost:5000/publishBlog/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success("Successfully published post");
        }
      });
  };

  const handleUnPublish = () => {
    const agree = window.confirm(
      `Are you sure you want to Unpublish: ${title}`
    );
    if (agree) {
      fetch(`http://localhost:5000/publishBlog/${_id}`, {
        method: "DELETE",
        
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(_id);
        console.log(data);
          setPublished(!published);

          // if (data.acknowledged) {
          //   // refetch();
          //   toast.success("Successfully deleted");
          //   const remainingBlogs = publishedBlog.filter(
          //     (post) => post._id !== _id
          //   );
          //   setPublishedBlog(remainingBlogs);
          //   console.log(publishedBlog);
          // }
        });
    }
  };
  return (
    <div>
      <div className="card w-96 bg-white shadow-xl">
        <figure>
          <img
            className="pt-3"
            style={{ height: "235px", width: "365px" }}
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">
            {title}
            <div className="flex items-center">
              {<FcLike />} <span></span>
            </div>
          </h2>
          <div className="card-actions justify-start my-2">
            <div className="badge badge-outline">{tags}</div>
          </div>
          <div className="flex items-center ">
            <div>
              <label
                style={{ border: "1px solid" }}
                tabIndex="0"
                className="btn btn-ghost btn-circle avatar "
              >
                {user?.photoURL ? (
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="profile.jpg" />
                  </div>
                ) : (
                  <FaRegUser></FaRegUser>
                )}
              </label>
            </div>
            <div className="flex ml-3">
              <div>
                {" "}
                <span className="text-gray-300">By</span>{" "}
                <span className="text-slate-600">{author}</span>
              </div>
              <div style={{ marginLeft: "inherit" }}>{date}</div>
            </div>
          </div>
          <div>
            <p className="text-slate-700">
              {blogText.length > 100
                ? blogText.slice(0, 100) + "..."
                : blogText}
            </p>
          </div>
          {blogText.length > 100 && (
            <Link to={`/blogDetails/${_id}`}>
              <div className="text-blue-400">Read More</div>
            </Link>
          )}

          <div className="flex justify-between ">
            <Link to={`/updateBlog/${_id}`}>
              <button className="btn btn-outline text-black">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline text-black"
            >
              Delete
            </button>
            {published ? (
              <>
                {" "}
                <button
                  onClick={() => handlePublish(_id)}
                  className="btn btn-outline text-black"
                >
                  Publish
                </button>
              </>
            ) : (
              <>
                {" "}
                <button
                  onClick={() => handleUnPublish(_id)}
                  className="btn btn-outline text-black"
                >
                  Unpublish
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostDetails;
