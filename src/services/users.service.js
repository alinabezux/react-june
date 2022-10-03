import {axiosService} from "./axios.service";

import {urls} from "../configs";

const usersService = {
    getUsers: () => axiosService.get(urls.users),
    createUser: (user) => axiosService.post(urls.users, user)
}
export {usersService}