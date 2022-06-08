import axios from 'axios';
const BASE_URL = 'http://localhost:3001';

let accessToken = JSON.parse(window.localStorage.getItem("accessToken"));
axios.defaults.baseURL = 'http://localhost:3001';
// axios.defaults.headers.common = { 'authorization': `Bearer ${accessToken}` }

export default axios;

// export default axios.create({
//     baseURL: BASE_URL
// });

// export const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true
// });