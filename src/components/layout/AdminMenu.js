import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/AuthStyle.css'

const AdminMenu = () => {
    return (
        <>
            <div className='admin-menu'>
                <h3>Admin Panel</h3>
                <ul className="list-group">
                    <li className="list-group-item " aria-current="true">
                        <NavLink to="/dashboard/admin/create-category" className="nav-link adm" style={{borderBottom:0}} >Create Category</NavLink>
                    </li>
                    <li className="list-group-item " aria-current="true">
                        <NavLink to="/dashboard/admin/create-product" className="nav-link adm" style={{borderBottom:0}}>Create Product</NavLink>
                    </li>
                    <li className="list-group-item " aria-current="true">
                        <NavLink to="/dashboard/admin/all-products" className="nav-link adm" style={{borderBottom:0}}>All Product</NavLink>
                    </li>
                    <li className="list-group-item " aria-current="true">
                        <NavLink to="/dashboard/admin/user" className="nav-link" style={{borderBottom:0}}>All Users</NavLink>
                    </li>

                </ul>

            </div>


        </>
    )
}

export default AdminMenu