import {axiosService} from "./axios.service";
import {urls} from "../configs";

const carService = {
    getCars: () => axiosService.get(urls.cars),
    createCar: (car) => axiosService.post(urls.cars, car),
    getCarById: (id) => axiosService.get(urls.cars + '/' + id),
    updateById: (id, car) => axiosService.put(urls.cars + '/' + id, car),
    deleteById: (id) => axiosService.delete(urls.cars + '/' + id)
}

export {carService}
