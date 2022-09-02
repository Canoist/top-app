import axios from "axios";

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOMAIN,
});

const httpService = {
    get: http.get,
    patch: http.patch,
    post: http.post,
    put: http.put,
    delete: http.delete,
};

export default httpService;
