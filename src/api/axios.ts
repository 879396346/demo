import axios from "axios";

let instance = axios.create({
    baseURL: 'http://localhost:3555/api/'
})

export default instance
