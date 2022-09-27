import axios from "axios";

import {baseURL} from "../components/url";

let axiosService = axios.create({baseURL})

export {axiosService};