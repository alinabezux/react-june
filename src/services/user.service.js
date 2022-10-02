import {axiosService} from "./axios.service";
import {urls} from "../configs";

const userService = {
    getUsers: () => axiosService.get(urls.users)
}
export {userService}
