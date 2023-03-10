import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
const PostDetails = ({ post }) => {
  const { image, id, likes, owner, publishDate, tags, text } = post;
  const { title, firstName, lastName, picture } = owner;
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
            {text.length > 40 ? text.slice(0, 40) : text}
            <div className="flex items-center">
              {<FcLike />} <span>{likes}</span>
            </div>
          </h2>
          <div className="card-actions justify-start my-2">
            <div className="badge badge-outline">{tags[0]}</div>
            <div className="badge badge-outline">{tags[1]}</div>
            <div className="badge badge-outline">{tags[2]}</div>
          </div>
          <div className="flex items-center ">
            <div>
              <img
                style={{ height: "40px" }}
                className="mask mask-circle"
                src={picture}
                alt=""
              />
            </div>
            <div className="flex ml-3">
              <div>
                {" "}
                <span className="text-gray-300">By</span>{" "}
                <span className="text-slate-600">
                  {firstName} {lastName}
                </span>
              </div>
              <div style={{ marginLeft: "inherit" }}>
                {publishDate.length > 10
                  ? publishDate.slice(0, 10)
                  : publishDate}
              </div>
            </div>
          </div>
          <div>
            <p className="text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              perspiciatis vero, non iste delectus fugiat dolores itaque
              asperiores commodi voluptas. Earum, incidunt velit...
            </p>
          </div>
          <Link to={`/posts/${id}`}>
            <div className="text-blue-400">Read More</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PostDetails;
