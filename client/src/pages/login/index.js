import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/auth/authSlice'
import { useLoginMutation } from '../../features/auth/authApiSlice'

function Index() {
    const userRef = useRef();
    const errRef = useRef();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        // userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    // // // Refresh token function to refresh the token automatically
    // // const refreshToken = async () => {
    // //     try {
    // //         const res = await Axios.post("/api/refresh", { token: user.refreshToken });
    // //         setUser({
    // //             ...user,
    // //             accessToken: res.data.accessToken,
    // //             refreshToken: res.data.refreshToken,
    // //         });
    // //         return res.data;
    // //     } catch (err) {
    // //         console.log(err);
    // //     }
    // // };

    // const axiosJWT = Axios.create()

    // // Interceptors
    // // Checks the requestes to axios before the are sent
    // // If the access tokens have expired - it will generate a new one
    // axiosJWT.interceptors.request.use(
    //     async (config) => {
    //         let currentDate = new Date();
    //         const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    //         const decodedToken = jwt_decode(accessToken);
    //         if (decodedToken.exp * 1000 < currentDate.getTime()) {
    //             const data = await refreshToken();
    //             config.headers["authorization"] = "Bearer " + data.accessToken;
    //         }
    //         return config;
    //     },
    //     (error) => {
    //         return Promise.reject(error);
    //     }
    // );

    // const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    // const decodedToken = jwt_decode(accessToken);
    // console.log(accessToken);
    // console.log(decodedToken);


    const handleLoginSubmit = async e => {
        e.preventDefault()
        try {
            // user data to be sent to the backend
            const userData = await login({ username, password }).unwrap()
            dispatch(setCredentials({ ...userData, username }))
            setUserName('')
            setPassword('')
            navigate('/dashboard')
        } catch (err) {
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            // errRef.current.focus();
        };
    }

    // checks if user exists and role name equal to admin
    // if (user && user.role_name === 'Admin') {
    //     console.log('====================================');
    //     console.log(user);
    //     console.log('====================================');
    //     return (
    //         <Navigate to='/' />
    //     )
    // };

    const content = isLoading ? <h1>Loading...</h1> : (
        <div className="login">
            <div className="login_items">
                <header>
                    <h1>Login</h1>
                </header>
                <form className="form-floating" onSubmit={handleLoginSubmit}>
                    <div className="username">
                        <label htmlFor="username">
                            {/* <!-- font awesome icon --> */}
                            {/* {{!-- < i className="fas fa-user"></i> --}} */}

                        </label>
                        <input type="text" name="username" placeholder="Username" id="username" required onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div className="password">
                        <label htmlFor="password">
                            <i className="fas fa-lock"></i>
                        </label>
                        <input type="password" name="password" placeholder="Password" id="password" required onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="button">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>

    )
    return content
}

export default Index;