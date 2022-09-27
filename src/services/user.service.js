import {axiosService} from "./axios.service";

import {url} from "../components/url";

const UserService={
    getUsers:()=>axiosService.get(url.users)
}
export {UserService};