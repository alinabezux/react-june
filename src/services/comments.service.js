import {axiosService} from "./axios.service";
import {urls} from "../configs";

const commentsService = {
    getComments: () => axiosService.get(urls.comments),
    postComment: (comment) => axiosService.post(urls.comments, comment)
}

export {commentsService}