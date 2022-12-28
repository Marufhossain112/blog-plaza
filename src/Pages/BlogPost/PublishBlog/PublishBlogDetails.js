import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaRegUser } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import PublishBlog from "./PublishBlog";
import LikeButton from "../../../layouts/Home/LikeButton/LikeButton";

const PublishBlogDetails = ({ post }) => {
  const { title, image, _id, author, date, tags, blogText } = post;
  const { user } = useContext(AuthContext);

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
              {<LikeButton />} <span></span>
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
        </div>
      </div>
    </div>
  );
};
export default PublishBlogDetails;
