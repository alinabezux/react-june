import {axiosService} from "./axios.service";

const getUsers = () => {
    return axiosService.get('/users')
}, getUser = (id) => {
    return axiosService.get('/users' + id)
};
export {getUsers,getUser};

  
