import axios from "axios";
import useAuth from "./UserAUth";
// import { useNavigate } from "react-router";

const instence = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSeciet = () => {
  const { user } = useAuth();
  // const naaaviget = useNavigate();, logoutUser
  console.log(user.accessToken);

  instence.interceptors.request.use((configs) => {
  if (user?.accessToken) {
    configs.headers.authorization = `Bearer ${user.accessToken}`;
  }
  return configs;
});

  // useEffect(() => {
  //   // ✅ Request Interceptor

  //   // ✅ Response Interceptor
  //   const reesponsId = instence.interceptors.response.use(
  //     (res) => res,
  //     async (err) => {
  //       // ✅ Safe Check
  //       const status = err?.response?.status;

  //       if (status === 401 || status === 403) {
  //         await logoutUser();
  //         naaaviget("/");
  //       }

  //       // Must return rejection
  //       return Promise.reject(err);
  //     }
  //   );

  //   return () => {
  //     instence.interceptors.request.eject(inspetId);
  //     instence.interceptors.response.eject(reesponsId);
  //   };
  // }, [logoutUser, user, naaaviget]);

  return instence;
};

export default useAxiosSeciet;
