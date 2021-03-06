import React, { useEffect } from 'react'
import { Table, Button } from 'reactstrap'
import * as fn from '../Actions'

function UserManagement({state, dispatch}) {

    useEffect(() => {
        fn.getListUsersAsync(dispatch)
    }, [])

    let detailHandler = (userItem) => {
        fn.toggleDiplayUserDetail(dispatch,  userItem)
    }

    let updateHandler = (userItem) => {
        fn.toggleDisplayUserEdit(dispatch, true, userItem)
    }

    let deleteHandler = (userItem) => {
        fn.deleteUserAsync(dispatch, userItem)
    }

    let newHandler = fn.toggleDisplayUserNew.bind(this, dispatch, true)

    return (
        <div>
            <Button color="success" className="mt-3 mb-2" onClick={newHandler}>Add new user</Button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Total liked product</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.ListUsers.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <th scope="row">{item.UserId}</th>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.ListLikedProducts.length}</td>
                                    <td>
                                        <Button color="primary" 
                                            className="mr-2 mb-2"
                                            onClick={detailHandler.bind(this, item)} >Detail</Button>
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

export default UserManagement