import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
            <div className='user-menu'>
                <h3>Dashboard</h3>
                <ul className="list-group">
                    <li className="list-group-item" aria-current="true">
                        <NavLink to="/dashboard/user/profile" className="nav-link " style={{borderBottom:0}} >Profile</NavLink>
                    </li>
                    <li className="list-group-item" aria-current="true">
                        <NavLink to="/dashboard/user/orders" className="nav-link adm" style={{borderBottom:0}}>Orders</NavLink>
                    </li>
                    <li className="list-group-item " aria-current="true">
                        <NavLink to="/dashboard/admin/user" className="nav-link" style={{borderBottom:0}}>All Users</NavLink>
                    </li>

                </ul>

            </div>


        </>
  )
}

export default UserMenu