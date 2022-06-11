export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));

    if (user && accessToken) {
        // for Node.js Express back-end
        return { authorization: 'Bearer ' + accessToken };


    } else {
        return {};
    }
}
