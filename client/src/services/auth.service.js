import axios from "axios";
const API_URL = "http://localhost:3001/";
const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "login", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                const result = response.data.user
                const accessToken = response.data.accessToken
                localStorage.setItem("user", JSON.stringify(result));
                localStorage.setItem("accessToken", JSON.stringify(accessToken));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const authService = {
    register,
    login,
    logout,
};

export default authService;