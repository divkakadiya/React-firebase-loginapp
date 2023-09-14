import React from 'react'
import { useState } from 'react';
import '../App.css';
import app from '../firebase-config'
import user from './img/user.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const auth = getAuth(app);
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const fetchInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    let navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                toast.success("Register Successfully")
                navigate('/login')
                // ...
            })
            .catch((error) => {
                toast.error(error.message)
                // ..
            });
        document.getElementById('userEmail').value = ''
        document.getElementById('userPass').value = ''
    }

    return (
        <div classname="App">
            <div className="wrapper">
                <div className="logo">
                    <img src={user} />
                </div>
                <div className="text-center mt-4 name">
                    Sign Up
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user" />
                        <input type="email" onChange={fetchInput} name="email" id="userEmail" placeholder="Email" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key" />
                        <input type="password" onChange={fetchInput} name="password" id="userPass" placeholder="Password" />
                    </div>
                    <button className="btn mt-3" onClick={submit}>Register</button>
                </form>
                <div className="justify-content-center d-flex align-items-center fs-6">
                    <span className='my-1 mx-1'>Already have an account ?</span> <a href="/login">Sign In</a>
                </div>
            </div>
        </div>

    );
}

export default Register