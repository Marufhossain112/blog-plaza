import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { CgList } from "react-icons/cg";
import { Link } from "react-router-dom";
const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="flex flex-col mt-5 items-center justify-center">
        <div>
          {user?.photoURL ? (
            <img
              style={{ width: "250px" }}
              className="rounded-full"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <img
              style={{ width: "250px" }}
              className="rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
          )}
        </div>
        <div className="mt-5">
          <h3 className="text-2xl underline">{user?.displayName}</h3>
        </div>
        <div
          className="flex mt-3 items-center font-bold tooltip tooltip-right"
          data-tip="Click to write blog"
        >
          Write a blog
          {
            <Link to={"/addPost"}>
              {" "}
              <AiOutlinePlusSquare className="ml-1 text-2xl"></AiOutlinePlusSquare>
            </Link>
          }{" "}
        </div>
        <div
          className="flex mt-2 items-center font-bold tooltip tooltip-right"
          data-tip="Click to go to my blog page"
        >
          My blogs
          {
            <Link to={"/myBlog"}>
              {" "}
              <CgList className="ml-1 text-2xl"></CgList>
            </Link>
          }{" "}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
