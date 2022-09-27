import axios from "axios";
import {baseURL} from "./url";

const axiosService = axios.create({baseURL});
export {axiosService}