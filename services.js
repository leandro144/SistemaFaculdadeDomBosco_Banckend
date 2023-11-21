import axios from "axios"

const api = axios.create({
    baseURL: "https://sistema-faculdade-dom-bosco.vercel.app"
});

export default api;