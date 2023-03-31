import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../styles/AuthStyle.css';

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/register', { name, email, password, address, phone,answer });

            if (res.data.success) {
                toast.success("User Registered successfully.");
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'register successful',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate('/login')

            } else {
                toast.error("Something went wrong")
            }
        } catch (error) {
            toast.error(error)
        }
    }

    return (
        <Layout title={'register - Ecommerce App'}>
            <div className="register">
                <div className="cnt">
                    <h1 className='title'>REGISTER FORM</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="fm">
                            <div className="mb-3">
                                <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" />

                            </div>
                            <div className="mb-3">
                                <input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" />

                            </div>
                            <div className="mb-3">
                                <input type="text" value={address} placeholder="Address" onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" />

                            </div>
                            <div className="mb-3">
                                <input type="text" value={phone} placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" />

                            </div>
                            <div className="mb-3">
                                <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <input type="text" value={answer} placeholder="Your favorite school teacher’s name?" onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" />
                            </div>

                            <button type="submit" className="btn btn-primary">REGISTER</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Register