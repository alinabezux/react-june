import {axiosService} from "./axios.service";
import {url} from "../configs";

const UserService = {
    getAll: () => axiosService.get(url.users)
}
export {UserService};