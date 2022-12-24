import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home/Home";
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
    ],
  },
]);
