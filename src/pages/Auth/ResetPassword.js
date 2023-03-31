import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import '../../styles/AuthStyle.css';

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/v1/auth/reset-password', { email, answer ,newPassword });

      const bool =true
      if (res.data.success) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Password updated successfully',
          showConfirmButton: false,
          timer: 2000
        })
        navigate("/login")

      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error("Invalid username or answer.");
    }
  }

  return (
    <Layout title={'Reset Password - Ecommerce App'}>
      <div className="register">
        <div className="cnt">
          <h1 className='title'>RESET PASSWORD</h1>
          <form onSubmit={handleSubmit}>
            <div className="fm">
              <div className="mb-3">
                <input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" />

              </div>
              <div className="mb-3">
                <input type="text" value={answer} placeholder="Your favorite school teacher’s name?" onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" />
              </div>
              <div className="mb-3">
                <input type="password" value={newPassword} placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
              </div>

              <button type="submit" className="btn btn-primary mt-5 mb-3">RESET PASSWORD</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ResetPassword