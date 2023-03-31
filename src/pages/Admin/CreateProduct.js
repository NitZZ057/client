import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import AdminMenu from '../../components/layout/AdminMenu'
import Layout from '../../components/layout/Layout'
import { useAuth } from '../../context/auth'
import axios from 'axios'
import { Select } from 'antd'
const { Option } = Select
const CreateProduct = () => {
  const [auth] = useAuth();
  const [name, setName] = useState('');
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState();
  const [photo, setPhoto] = useState();
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();
  const [quantity, setQuantity] = useState();
  const [shipping, setShipping] = useState();

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
    <Layout title="Create Product - Admin">
      <div className="container-fluid mt-3 pt-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 pdr">
            <div className="card w-75 p-3">
              <h4>Create Product</h4>
              <div className="sel m-3">
                <Select
                  bordered={false}
                  placeholder="Select category"
                  size='large'
                  showSearch
                  className='form-select mb-3'
                  onChange={(value) => {
                    setCategory(value);
                  }}
                >
                  <>
                    {
                      categories?.map(c => (
                        <Option key={c._id} value={c.name}>
                          {c.name}
                        </Option>
                      ))


                    }
                  </>
                </Select>
              </div>

              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-6 rounded">
                  {photo ? photo.name : 'Upload photo'}
                  <input
                    type="file"
                    name='photo'
                    accept='image/*'
                    onChange={(e) => {
                      setPhoto(e.target.files[0])
                    }}
                    hidden
                  >
                  </input>
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img src={URL.createObjectURL(photo)} alt="product_photo" height="200px" className='img img-responsive' />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input type="text" value={name} placeholder="Write a name" className="form-control " onChange={(e) => { setName(e.target.value) }}></input>
              </div>
              <div className="mb-3">
                <textarea type="text" value={description} placeholder="Write description" className="form-control " onChange={(e) => { setdescription(e.target.value) }}></textarea>
              </div>
              <div className="mb-3">
                <input type="number" value={price} placeholder="Write a price" className="form-control " onChange={(e) => { setPrice(e.target.value) }}></input>
              </div>
              <div className="mb-3">
                <input type="number" value={quantity} placeholder="Write a quantity" className="form-control " onChange={(e) => { setQuantity(e.target.value) }}></input>
              </div>
              <div className="mb-3">
              <Select
                  bordered={false}
                  placeholder="Select shipping"
                  size='large'
                  showSearch
                  className='form-select mb-3'
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <>
                        <Option value="1">
                          Yes
                        </Option>
                        <Option value="0">
                          No
                        </Option>
                  </>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateProduct