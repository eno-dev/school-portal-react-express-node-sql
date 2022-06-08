export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('====================================');
    console.log('This is the user: ', user);
    console.log('====================================');
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    console.log('====================================');
    console.log('This is the access Token: ', accessToken);
    console.log('====================================');

    if (user && accessToken) {
        // for Node.js Express back-end
        return { authorization: 'Bearer ' + accessToken };


    } else {
        return {};
    }
}
