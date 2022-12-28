import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home/Home";
import AddPost from "../Pages/BlogPost/AddPost/AddPost";
import MyBlog from "../Pages/BlogPost/MyBlog/MyBlog";
import UpdateBlog from "../Pages/BlogPost/UpdateBlog/UpdateBlog";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import PostDetails from "../Pages/PostDetails/PostDetails";
import Posts from "../Pages/Posts/Posts";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/home",
        element: <HomePage></HomePage>,
      },
      {
        path: "/postDetails/:id",
        element: <PostDetails></PostDetails>,
      },
      {
        path: "/blogDetails/:id",
        element: <Posts></Posts>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogDetails/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/addPost",
        element: <AddPost></AddPost>,
      },
      {
        path: "/myBlog",
        element: <MyBlog></MyBlog>,
      },
      {
        path: "/updateBlog/:id",
        element: <UpdateBlog></UpdateBlog>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogDetails/${params.id}`),
      },
    ],
  },
]);
