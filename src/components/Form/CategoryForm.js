import React from 'react'

const CategoryForm = ({ handelSubmit, value, setvalue }) => {
    return (
        <>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='create category' value={value} onChange={(e) => { setvalue(e.target.value) }} />
                </div>
                    <button type="submit" className="act-btn">Add</button>
            </form>

        </>

    )
}

export default CategoryForm