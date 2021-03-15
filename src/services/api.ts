import axios from 'axios';

const api = axios.create({
    baseURL: "http://26.149.53.141:3333",
});

export default api;
