import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Rigester from "../Pages/Rigester/Rigester";
import Home from "../Pages/Home/Home";
import AddModal from "../Pages/AddModal/AddModal";
import AllModal from "../Pages/AllModal/AllModal";
import Download from "../Pages/Download/Download";
import MyModels from "../Pages/MyModels/MyModels";
import Detlics from "../Pages/Detlics/Detlics";
import PrivetRouter from "./PrivetRouter";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Rigester></Rigester>,
      },
      {
        path: "/addmodal",
        element: <PrivetRouter><AddModal></AddModal></PrivetRouter>,
      },
      {
        path: "/all-modal",
        element:<PrivetRouter> <AllModal></AllModal></PrivetRouter>,
      },
      {
        path: "download",
        element: <PrivetRouter><Download></Download></PrivetRouter>,
      },
      {
        path: "/my-models",
        element: <PrivetRouter><MyModels></MyModels></PrivetRouter>,
      },
      {
        path:"/detlise/:id",
        element:<PrivetRouter><Detlics></Detlics></PrivetRouter>
      }
    ],
  },
]);
