import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
const AddPost = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const handleAddData = (data) => {
    console.log(data);
    const imagebbHostKey = process.env.REACT_APP_imagebb_key;
    console.log(imagebbHostKey);
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imagebbHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const image = imgData.data.url;
          const { title, tags, blogText } = data;
          const blogDetails = {
            title,
            tags,
            blogText,
            author: user?.displayName,
            date: `${year}-${month}-${date}`,
            image: image,
          };
          fetch("http://localhost:5000/addBlog", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(blogDetails),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result) {
                toast.success("Successfully added post")
                reset();
              }
            });
        }
      });

    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const date = newDate.getDate();
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 bg-white rounded-xl">
        <h2 className="text-xl text-center">Add Blog</h2>
        <form style={{color:"white"}} onSubmit={handleSubmit(handleAddData)}>
          <div className="form-control w-full max-w-xs">
            <label className="label flex items-center">
              {" "}
              <span className="label-text">
                Title
                <span style={{ fontSize: "larger" }} className="text-red-600">
                  *
                </span>
              </span>
            </label>
            <input
              type="text"
              {...register("title", {
                required: "Title is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">
                Image
                <span style={{ fontSize: "larger" }} className="text-red-600">
                  *
                </span>
              </span>
            </label>
            <input
              type="file"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Choose an image"
              {...register("img", {
                required: "Image is Required",
              })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Tags</span>
            </label>
            <input
              type="text"
              {...register("tags")}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">
                Blog Text
                <span style={{ fontSize: "larger" }} className="text-red-600">
                  *
                </span>
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              type="text"
              {...register("blogText", {
                required: "Blog text is required",
              })}
            />
            {errors.blogText && (
              <p className="text-red-500">{errors.blogText.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-4"
            value="Add Blog"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddPost;
