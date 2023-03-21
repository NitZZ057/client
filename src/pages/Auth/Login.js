import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import '../../styles/AuthStyle.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/login', { email, password })
            if (res && res.data.success) {
                toast.success(res.data.message, { timer: 4000 });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'login successful',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate("/")

            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error("Invalid username or password.");
        }
    }

    return (
        <>
            <Layout title={'Login - Ecommerce App'}>
                <div className="register">
                    <div className="cnt">
                        <h1 className='title'>Login Form</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="fm">
                                <div className="mb-3">
                                    <input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" />

                                </div>
                                <div className="mb-3">
                                    <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                                </div>

                                <button type="submit" className="btn btn-primary">LOGIN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login