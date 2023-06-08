import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "../App";
import axios from "axios";
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { setId, setUser, setToken } = useContext(ItemsContext);
    const email = useRef('')
    const password = useRef('')
    const navigate = useNavigate('')
    const handleSubmit = async () => {
        if (email.current.value !== '' && password.current.value !== '') {
            if (email.current.value === "admin@gmail.com" && password.current.value === "admin") {
                navigate('/admin');
            }
            else {
                axios.post('http://localhost:8000/login', { email: email.current.value, password: password.current.value })
                    .then(response => {
                        navigate('/home')
                        setId(response.data._id)
                        setUser(response.data.name)
                        setToken(response.data.token)
                        localStorage.setItem('id', response.data._id)
                        localStorage.setItem('token', response.data.token)
                        localStorage.setItem('user', response.data.name)
                    })
                    .catch(error => {
                        console.log(error)
                        toast.error(error.response.data.error, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            })
                    })
            }
        }
        else {
            toast.warn('All fields are mandatory!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }
    }
    return (
        <div className="login">
            <div className="login-container">
                <h1>Login</h1>
                <ToastContainer/>
                <div className="login-fields">
                    <input type="email" placeholder="Email" name="email" ref={email} className="login-inp" />
                    <input type="password" placeholder="Password" name="password" ref={password} className="login-inp" />
                    {/* <button>Forgot Password?</button> */}
                    <button onClick={handleSubmit} className="login-submit">Login</button>
                    <div className="login-footer">Not a member?<Link to='/register' className="login-footer-member"><p>Register</p></Link></div>
                </div>
            </div>
        </div>
    )
}

export default Login;