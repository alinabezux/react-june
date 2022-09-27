import {axiosService} from "./axiosService";
import {url} from "./url";

const rocketService = {
    getRockets: () => axiosService(url.launches)
}
export {rocketService}
