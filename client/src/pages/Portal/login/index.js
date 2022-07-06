import { useRef, useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../../features/auth/authSlice'
import { useLoginMutation } from '../../../features/auth/authApiSlice'
import LoadingScreen from '../../../components/loading/LoadingScreen';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';


function Index() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
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
            navigate('/portal')
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


    const handleUserInput = (e) => setUserName(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)

    if (isLoggedIn) {
        console.log('SWEAR')
    }

    const content = isLoading ? <LoadingScreen /> : (
        <div className="login">
            <div className="login_items">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <header>
                    <h1>Sign In</h1>
                </header>

                <div className="username">
                    <Box
                        className="form-floating"
                        onSubmit={handleLoginSubmit}
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <>
                            <TextField
                                className='username'
                                id="username"
                                label="Username"
                                variant="outlined"
                                type="text"
                                name="username"
                                placeholder="Username"
                                ref={userRef}
                                required
                                onChange={handleUserInput}
                            />

                            <TextField
                                className='password'
                                id="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                onChange={handlePasswordInput}
                            />
                            {/* <Button type="submit" value="Login">
                                Login
                            </Button> */}
                            <div className="button">
                                <input type="submit" value="Login" />
                            </div>
                        </>
                    </Box>
                </div>
            </div>
        </div>
    )
    return content
}

export default Index;