import axios from "axios";

import {_url} from "../components/url";

let axiosService = axios.create({
    baseURL: _url,
});

export {axiosService};