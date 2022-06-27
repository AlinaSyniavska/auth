const baseURL = process.env.REACT_APP_API;

const urls = {
    users: '/users',
    login: '/auth/login',
    refresh: '/auth/refreshToken',
}

export default baseURL;

export {
    urls
};