import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import CategoryForm from '../../components/Form/CategoryForm'
import AdminMenu from '../../components/layout/AdminMenu'
import Layout from '../../components/layout/Layout'
import { useAuth } from '../../context/auth'
import { Modal } from 'antd'

const CreateCategory = () => {
  const [auth] = useAuth();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null)

  const handelSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('http://localhost:8080/api/v1/category/create-category', { name })
      if (data.success) {
        toast.success(`${data.category.name} is created successfully`)
        getAllCategory()
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong in creating category")
    }
  }

  const handelupdate = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.put(`http://localhost:8080/api/v1/category/update-category/${selected._id}`, { name: updatedName })
      if (data.success) {
        toast.success(`${data.category.name} is updated successfully`)
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory()
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong in updating category")
    }
  }

  const handeldelete = async (pid) => {
    try {
      const { data } = await axios.delete(`http://localhost:8080/api/v1/category/delete-category/${pid}`)
      if (data.success) {
        toast.success(`category is deleted successfully`)
        getAllCategory()
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong in deleting category")
    }
  }


  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/v1/category/categories')
      if (data.success) {
        setCategories(data.categories)
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong in getting categories")
    }
  }

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Layout title="Create Category - Admin">
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              {/* <h4>Admin Name :{auth?.user?.name}</h4> */}
              <h4>Manage Category</h4>
              <div className="p-3">
                <CategoryForm value={name} setvalue={setName} handelSubmit={handelSubmit} />
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {
                      categories?.map(c => (
                        <tr>
                          <td key={c._id}>{c.name}</td>
                          <td>
                            <button className='act-btn' onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c)
                            }}>
                              Edit
                            </button>
                            <button className='dl-btn' onClick={() =>{
                              handeldelete(c._id)

                            }}>
                              Delete
                              </button>
                          </td>
                        </tr>
                      ))
                    }
                  </>
                </tbody>
              </table>


            </div>
            <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
              <CategoryForm handelSubmit={handelupdate} value={updatedName} setvalue={setUpdatedName} />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateCategory

