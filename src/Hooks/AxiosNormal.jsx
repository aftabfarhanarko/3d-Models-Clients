import axios from "axios";

const instence = axios.create({
  baseURL: "https://3d-modal-server.vercel.app",
});

const useAxiosNormle = () => {
  return instence;
};

export default useAxiosNormle;
