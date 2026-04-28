import { createBrowserRouter } from "react-router";
import Rootlayouts from "../layouts/Rootlayouts";
import Home from "../components/pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayouts,
    children:[
      {
        index:true,
        Component:Home,
      }
    ]
  },
]);
