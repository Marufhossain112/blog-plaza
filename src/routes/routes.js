import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        
      },
    ],
  },
]);
