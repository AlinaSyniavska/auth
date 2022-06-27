import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {createBrowserHistory} from "history";

import {authService} from "./auth.service";
import baseURL from "../constants/urls";

const history = createBrowserHistory();
const axiosService = axios.create({baseURL});


let isRefreshing = false;

axiosService.interceptors.request.use((config: AxiosRequestConfig) => {
    const access = localStorage.getItem('access') as string;
    if (access) {
        config.headers ={
            Authorization: `${access}`
        }
    }
    return config;
})

axiosService.interceptors.response.use(
    (config: AxiosRequestConfig) => {
        return config
    },
    async (error) => {
        const refreshToken = localStorage.getItem('refresh') as string;
        if (error.response?.status === 401 && error.config && !isRefreshing && refreshToken) {
            isRefreshing = true
            try {
                const {data} = await authService.refresh(refreshToken);
                const {access_token, refresh_token} = data;
                localStorage.setItem('access', access_token)
                localStorage.setItem('refresh', refresh_token)
            } catch (e) {
                localStorage.clear();
                history.replace('/login?expSession=true')
            }
            isRefreshing = false
            return axiosService.request(error.config)
        }
        return Promise.reject(error)
    }
)

export type Response<T> = Promise<AxiosResponse<T>>;

export {
    axiosService,
    history,
};
