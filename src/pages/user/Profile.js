import React from 'react'
import Layout from '../../components/layout/Layout'
import UserMenu from '../../components/layout/UserMenu'

const Profile = () => {
  return (
    <Layout title="Profile - Ecommerce App">
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu/>
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              {/* <h4>Admin Name :{auth?.user?.name}</h4>
              <h4>Admin Contact :{auth?.user?.email}</h4>
              <h4>Admin Email :{auth?.user?.phone}</h4> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile