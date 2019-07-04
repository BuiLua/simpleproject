import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap'
import * as fn from '../Actions'

function CategoryNew({state, dispatch}) {

    let closeHandler = fn.toggleDisplayCategoryNew.bind(this, dispatch, false)
    let nameHandler = (evt) => {
        fn.changeNewCategoryData(dispatch, {
            ...state.NewCategory,
            Name: evt.target.value
        })
    }

    let saveHandler = fn.addNewCategoryAsync.bind(this, dispatch, state.NewCategory)

    return (
        <div>
            {
                state.NewCategory != null ?
                (
                    <Modal isOpen={state.IsOpenNewCategory} 
                        toggle={closeHandler}>
                        <ModalHeader toggle={closeHandler}>New Category</ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" 
                                    value={state.NewCategory.Name}
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

export default CategoryNew
