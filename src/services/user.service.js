import {axiosService} from "./axios.service";
import {info} from "../components/url";

const UserService={
    getUsers:()=>axiosService.get(info.users)
}
export {UserService};