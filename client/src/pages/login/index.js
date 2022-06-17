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
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleLoginSubmit = async e => {
        e.preventDefault()
        try {
            // user data to be sent to the backend
            const userData = await login({ username, password }).unwrap()
            dispatch(setCredentials({ ...userData }))
            setUserName('')
            setPassword('')
            navigate('/')
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

    const content = isLoading ? <h1>Loading...</h1> : (
        <div className="login">
            <div className="login_items">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <header>
                    <h1>Login</h1>
                </header>
                <form className="form-floating" onSubmit={handleLoginSubmit}>
                    <div className="username">
                        <label htmlFor="username">
                            {/* <!-- font awesome icon --> */}
                            {/* {{!-- < i className="fas fa-user"></i> --}} */}

                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            id="username"
                            ref={userRef}
                            required
                            onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div className="password">
                        <label htmlFor="password">
                            <i className="fas fa-lock"></i>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="password"
                            required
                            onChange={e => setPassword(e.target.value)} />
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