import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const postsService = {
    getAll: () => axiosInstance.get(urls.posts)
}

export {postsService}