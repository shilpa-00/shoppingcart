import React,{useState,useRef} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const name = useRef('')
    const email = useRef('')
    const password = useRef('')
    const [users, setUsers] = useState([])
    const handleSubmit=()=>{
        if (name.current.value !== '' && email.current.value !== '' && password.current.value !== '') {
            axios.post('http://localhost:8000/register', { name: name.current.value, email: email.current.value, password: password.current.value })
                .then(response => {
                    setUsers([...users, { _id: response.data._id, name: response.data.name, email: response.data.email, password: response.data.password }])
                    name.current.value = ''
                    email.current.value = ''
                    password.current.value = ''
                    toast.success('Registration Successful...', {
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
                .catch(error => {
                    // console.log(error)
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
        <div className="register">
            <ToastContainer/>
            <div className="register-container">
                <h1>Register</h1>
                <div className="register-fields">
                    <input type="text" placeholder="Name" name="name" ref={name} className="register-inp" />
                    <input type="email" placeholder="Email" name="email" ref={email} className="register-inp" />
                    <input type="password" placeholder="Password" name="password" ref={password} className="register-inp" />
                    <button onClick={handleSubmit} className="register-submit">Register</button>
                    <div className="register-footer">Already registered?<Link to='/' className="register-footer-member"><p>Login</p></Link></div>
                </div>
            </div>
        </div>
    )
}

export default Register;