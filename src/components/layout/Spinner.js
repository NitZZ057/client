import React,{useEffect,useState} from 'react'
import '../../styles/AuthStyle.css';
import Layout from './Layout';
import { useNavigate,useLocation } from 'react-router-dom';

const Spinner = ({path="login"}) => {
    const [count,setCount] = useState(3);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() =>{
        const interval = setInterval(()=>{
            setCount((prevValue)=>--prevValue);
        },1000);

        count === 0 && navigate(`/${path}`,{
            state:location.pathname
        })

        return ()=>clearInterval(interval)
    },[count,navigate,path])
    return (
        <>
        <Layout>
            <div class="d-flex flex-column align-items-center justify-content-center spinner">
                <span className='uaa'>Unauthorized Access</span>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <span>Redirecting you in {count} sec</span>
            </div>
            </Layout>
        </>
    )
}

export default Spinner