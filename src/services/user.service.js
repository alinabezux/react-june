import {axiosService} from "./axios.service";

const getUsers = () => {
    return axiosService.get('/users')
}
export {getUsers};

  
