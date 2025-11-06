import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Rigester from "../Pages/Rigester/Rigester";
import Home from "../Pages/Home/Home";
import AddModal from "../Pages/AddModal/AddModal";
import AllModal from "../Pages/AllModal/AllModal";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
       Component: Home
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
        path:"/addmodal",
        element:<AddModal></AddModal>
      },
      {
        path:"/all-modal",
        element:<AllModal></AllModal>
      }
    ],
  },
]);
