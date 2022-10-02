import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postsService = {
    getPosts: (userId) => axiosService.get(`${urls.posts}/?userId=${userId}`)
}
export {postsService}