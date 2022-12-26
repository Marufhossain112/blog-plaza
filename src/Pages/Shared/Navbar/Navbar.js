import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("User", user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const ulItems = (
    <>
      <li>
        <Link to={"/home"}>Home</Link>
      </li>
      {user?.uid ? (
        ""
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>{" "}
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar text-black bg-green-300 justify-between w-full mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              {ulItems}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            BlogPlaza
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{ulItems}</ul>
        </div>
        <div class="flex-none gap-2">
          <div class="form-control">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered"
            />
          </div>
          {
            user?.uid && <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52"
            >
              <li>
                <a class="justify-between">Profile</a>
              </li>

              {user?.uid && (
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              )}
            </ul>
          </div>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
