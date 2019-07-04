import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap'
import * as fn from '../Actions'

function CategoryEdit({state, dispatch}) {

    let closeHandler = fn.toggleDisplayCategoryEdit.bind(this, dispatch, false, state.EditCategory)
    let nameHandler = (evt) => {
        fn.changeEditCategoryData(dispatch, {
            ...state.EditCategory,
            Name: evt.target.value
        })
    }

    let saveHandler = fn.updateCategoryAsync.bind(this, dispatch, state.EditCategory)

    return (
        <div>
            {
                state.EditCategory != null ?
                (
                    <Modal isOpen={state.IsOpenEditCategory} 
                        toggle={closeHandler}>
                        <ModalHeader toggle={closeHandler}>Update Category: {state.EditCategoryName}</ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" 
                                    value={state.EditCategory.Name}
                                    onChange={nameHandler}
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

export default CategoryEdit