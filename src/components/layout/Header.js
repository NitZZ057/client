import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
import '../../styles/AuthStyle.css';


const Header = () => {
  const [auth, setAuth] = useAuth();

  const logout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem('auth');
    toast.success("logout successfully")
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><FaShoppingCart /> Ecommerce App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/categories">Categories</NavLink>
              </li>
              {
                !auth.user ? (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " to="/login">Login</NavLink>
                    </li>
                  </>
                ) : (
                  <>

                    <div className="dropdown">
                      <button className=" dropdown-toggle nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {auth?.user?.name}
                      </button>
                      <ul className="dropdown-menu">
                        <li className="nav-item mx-2">
                          <NavLink className="nav-link " to={`/dashboard/${
                            auth?.user?.role === 1? "admin":"user"
                          }`}>Dashboard</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                          <NavLink className="nav-link " onClick={logout} to="/login">Logout</NavLink>
                        </li>

                      </ul>
                    </div>


                  </>
                )
              }
              <li className="nav-item">
                <NavLink className="nav-link " to="/cart">Cart (0)</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header
