import React from "react";
import useAuth from "../Hooks/UserAUth";
import { useLocation, useNavigate } from "react-router";

const PrivetRouter = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const naviget = useNavigate();
  if (!user) {
    return naviget("/login");
  }

  if (user) {
    return children;
  }
};

export default PrivetRouter;
