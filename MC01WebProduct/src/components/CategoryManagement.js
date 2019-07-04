import React, { useEffect } from 'react'
import { Table, Button } from 'reactstrap'
import * as fn from '../Actions'

function CategoryManagement({state, dispatch}) {

    useEffect(() => {
        fn.getListCategoriesAsync(dispatch)
    }, [])

    let newHandler = fn.toggleDisplayCategoryNew.bind(this, dispatch, true)

    let updateHandler = (categoryItem) => {
        fn.toggleDisplayCategoryEdit(dispatch, true, categoryItem)
    }

    let deleteHandler = (categoryItem) => {
        fn.deleteCategoryAsync(dispatch, categoryItem)
    }

    return (
        <div>
            <Button color="success" className="mt-3 mb-2" onClick={newHandler}>Add new category</Button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Total products</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.ListCategories.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <th scope="row">{item.CategoryId}</th>
                                    <td>{item.Name}</td>
                                    <td>{item.TotalProduct}</td>
                                    <td>
                                        <Button color="secondary" 
                                            className="mr-2 mb-2" 
                                            onClick={updateHandler.bind(this, item)}>Edit</Button>
                                        <Button color="danger" 
                                            className="mr-2 mb-2"
                                            onClick={deleteHandler.bind(this, item)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default CategoryManagement