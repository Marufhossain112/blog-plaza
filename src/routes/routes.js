import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import HomePage from "../Pages/HomePage/HomePage";
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
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
