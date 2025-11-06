import { use } from "react"
import { AuthCntext } from "../Context/AuthContex"


const useAuth = () => {
    const data = use(AuthCntext);

    return data;
}


export default useAuth;