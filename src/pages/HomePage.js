import React from 'react'
import { Toaster } from 'react-hot-toast'
import Layout from '../components/layout/Layout'
import { useAuth } from '../context/auth'

const HomePage = () => {
  const [auth,setAuth] = useAuth()
  return (
    <Layout>
      <h1>Home</h1>
      <pre>{JSON.stringify(auth,null,4)}</pre>
      <Toaster/>
      
    </Layout>
  )
}

export default HomePage
