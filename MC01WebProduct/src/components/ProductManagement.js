import React, { useEffect } from 'react'
import { Table, Button } from 'reactstrap'
import * as fn from '../Actions'
import './ProductManagement.scss'

function ProductManagement({state, dispatch}) {

    useEffect(() => {
        fn.getListProductsAsync(dispatch)
    }, [])

    let newHandler = fn.toggleDisplayProductNew.bind(this, dispatch, true)

    let updateHandler = (productItem) => {
        fn.toggleDisplayProductEdit(dispatch, true, productItem)
    }

    let deleteHandler = (productItem) => {
        fn.deleteProductAsync(dispatch, productItem)
    }

    return (
        <div className="ProductManagement">
            <Button color="success" className="mt-3 mb-2" onClick={newHandler}>Add new product</Button>

            <Table className="table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Total users liked</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.ListProducts.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <th scope="row">{item.ProductId}</th>
                                    <td>
                                        <img src={item.Image} alt="" className="item-product-img"/>
                                    </td>
                                    <td>{item.Name}</td>
                                    <td>{item.Category.Name}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.TotalUserLiked}</td>
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

export default ProductManagement