import axios from "axios";

let axiosService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'aplication/json',}
});

export {axiosService};