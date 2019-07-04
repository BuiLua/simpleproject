import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap'
import * as fn from '../Actions'

function UserEdit({state, dispatch}) {

    let closeHandler = fn.toggleDisplayUserEdit.bind(this, dispatch, false, state.EditUser)
    let nameHandler = (evt) => {
        fn.changeEditUserData(dispatch, {
            ...state.EditUser,
            Name: evt.target.value
        })
    }

    let emailHandler = (evt) => {
        fn.changeEditUserData(dispatch, {
            ...state.EditUser,
            Email: evt.target.value
        })
    }

    let saveHandler = fn.updateUserAsync.bind(this, dispatch, state.EditUser)

    return (
        <div>
            {
                state.EditUser != null ?
                (
                    <Modal isOpen={state.IsOpenEditUser} 
                        toggle={closeHandler}>
                        <ModalHeader toggle={closeHandler}>Update User: {state.EditUserName}</ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" 
                                    value={state.EditUser.Name}
                                    onChange={nameHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="text" className="form-control" 
                                    value={state.EditUser.Email}
                                    onChange={emailHandler}
                                />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={saveHandler}>Save</Button>
                            <Button color="secondary" onClick={closeHandler}>Close</Button>
                        </ModalFooter>
                    </Modal>
                ) : null
            }
        </div>
    )
}

export default UserEdit