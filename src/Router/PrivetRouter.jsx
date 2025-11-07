import useAuth from "../Hooks/UserAUth";
import { Navigate, useLocation} from "react-router";

const PrivetRouter = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  
  if (user) {
    return children;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>
  }

};

export default PrivetRouter;
