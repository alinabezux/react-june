import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const usersService = {
    getAll: () => axiosInstance.get(urls.users),
}

export {usersService}