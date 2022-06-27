import {axiosService, Response} from "./axios.service";
import {urls} from "../constants";
import {IAuth, ILogin} from "../interfaces";

const authService = {
    getTokens: (user: ILogin): Response<IAuth> => axiosService.post(urls.login, user),
    refresh: (refresh: string): Response<IAuth> => axiosService.post(urls.refresh, {refresh})
}

export {
    authService
}