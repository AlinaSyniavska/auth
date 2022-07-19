const baseURL = process.env.REACT_APP_API;

const urls = {
    users: '/users',
    login: '/auth/login',
    logout: '/auth/logout',
    refresh: '/auth/refreshToken',
}

export default baseURL;

export {
    urls
};