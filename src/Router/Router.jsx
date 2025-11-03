import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import { Home } from "lucide-react";

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            }
        ]
    }
]) 