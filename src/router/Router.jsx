import { createBrowserRouter } from "react-router";
import Rootlayouts from "../layouts/Root";
import Root from "../layouts/Root";
import Home from "../components/pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index:true,
        Component: Home,
      }
    ]
  },
]);
