import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap'
import Select from 'react-select'
import * as fn from '../Actions'

function ProductNew({state, dispatch}) {

    let closeHandler = fn.toggleDisplayProductNew.bind(this, dispatch, false)
    let nameHandler = (evt) => {
        fn.changeNewProductData(dispatch, {
            ...state.NewProduct,
            Name: evt.target.value
        })
    }
    let imageHandler = (evt) => {
        fn.changeNewProductData(dispatch, {
            ...state.NewProduct,
            Image: evt.target.value
        })
    }
    let descriptionHandler = (evt) => {
        fn.changeNewProductData(dispatch, {
            ...state.NewProduct,
            Description: evt.target.value
        })
    }
    let categoryIdHandler = (selectOption) => {
        fn.changeNewProductData(dispatch, {
            ...state.NewProduct,
            Category: selectOption
        })
    }
    let saveHandler = () => {
        if(state.NewProduct.Category == null) {
            state.NewProduct.Category = state.ListOptionCategories[0]
        }
        fn.addNewProductAsync.bind(this, dispatch, state.NewProduct)()
    }
    let categoryValue = null
    if(state.NewProduct != null) {
        categoryValue =  state.NewProduct.Category == null ? state.ListOptionCategories[0] : state.NewProduct.Category
    }

    return (
        <div>
            {
                state.NewProduct != null ?
                (
                    <Modal isOpen={state.IsOpenNewProduct} 
                        toggle={closeHandler}>
                        <ModalHeader toggle={closeHandler}>New Product</ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" 
                                    value={state.NewProduct.Name}
                                    onChange={nameHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label>Image:</label>
                                <input type="text" className="form-control" 
                                    value={state.NewProduct.Image}
                                    onChange={imageHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <input type="text" className="form-control" 
                                    value={state.NewProduct.Description}
                                    onChange={descriptionHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label>Category:</label>
                                <Select
                                    value={categoryValue}
                                    onChange={categoryIdHandler}
                                    options={state.ListOptionCategories}
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

export default ProductNew