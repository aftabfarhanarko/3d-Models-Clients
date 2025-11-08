import axios from "axios";

const instence = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosNormle = () => {
  return instence;
};

export default useAxiosNormle;
