import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../../contexts/AuthProvider";

const UpdateBlog = () => {
  const updateBlogData = useLoaderData();
  // console.log(updateBlogData);
  const [blogDetailsData, setBlogDetailsData] = useState({ updateBlogData });
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { title, image, _id, author, date, tags, blogText } = updateBlogData;
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(review);
    fetch(`http://localhost:5000/updateBlog/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogDetailsData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // alert("user updated");
          toast.success("User Updated Successfully");
          navigate("/myBlog");
          console.log(data);
        }
      });
  };
  const handleOnBlur = (event) => {
    const field = event.target.name;
    let value;
    if (value == null || "") {
      value = event.target.defaultValue;
    } else {
      value = event.target.value;
    }
    // const value = event.target.value;
    const newBlogDetails = { ...blogDetailsData };
    newBlogDetails[field] = value;
    setBlogDetailsData(newBlogDetails);
  };
  console.log(blogDetailsData);

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 bg-white rounded-xl">
        <h2 className="text-xl text-center">Add Blog</h2>
        <form style={{ color: "white" }} onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label flex items-center">
              {" "}
              <span className="label-text">Title</span>
            </label>
            <input
              onBlur={handleOnBlur}
              type="text"
              name="title"
              className="input input-bordered w-full max-w-xs"
              defaultValue={title}
              required
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Tags</span>
            </label>
            <input
              onBlur={handleOnBlur}
              defaultValue={tags}
              type="text"
              name="tags"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Blog Text</span>
            </label>
            <textarea
              name="blogText"
              onBlur={handleOnBlur}
              rows={6}
              defaultValue={blogText}
              className="textarea textarea-bordered"
              type="text"
              required
            />
          </div>
          <input
            className="btn btn-accent w-full mt-4"
            value="Update Blog"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
