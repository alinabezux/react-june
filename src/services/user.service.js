import {axiosService} from "./axios.service";

const getUsers = () => {
    return axiosService.get('/users')
}

const getUser = (id) => {
    return axiosService.get(getUsers() + id)
}
export {getUsers};

  
