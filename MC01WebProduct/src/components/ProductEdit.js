import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap'
import Select from 'react-select'
import * as fn from '../Actions'

function ProductEdit({state, dispatch}) {

    let closeHandler = fn.toggleDisplayProductEdit.bind(this, dispatch, false)
    let nameHandler = (evt) => {
        fn.changeEditProductData(dispatch, {
            ...state.EditProduct,
            Name: evt.target.value
        })
    }
    let imageHandler = (evt) => {
        fn.changeEditProductData(dispatch, {
            ...state.EditProduct,
            Image: evt.target.value
        })
    }
    let descriptionHandler = (evt) => {
        fn.changeEditProductData(dispatch, {
            ...state.EditProduct,
            Description: evt.target.value
        })
    }
    let categoryIdHandler = (selectOption) => {
        fn.changeEditProductData(dispatch, {
            ...state.EditProduct,
            Category: selectOption,
            CategoryId: selectOption.value
        })
    }

    // let saveHandler = () => {
    //     if(state.EditProduct.Category == null) {
    //         state.EditProduct.Category = state.ListOptionCategories[0]
    //     }
    //     fn.updateProductAsync.bind(this, dispatch, state.EditProduct)()
    // }
    // let categoryValue = null
    // if(state.EditProduct != null) {
    //     categoryValue =  state.EditProduct.Category == null ? state.ListOptionCategories[0] : state.EditProduct.Category
    // }
    // let saveHandler = () => {
    //     if(state.EditProduct.Category == null) {
    //         state.EditProduct.Category = state.ListOptionCategories.filter((item) => item.value == state.EditProduct.CategoryId)[0]
    //         }
    //         fn.updateProductAsync.bind(this, dispatch, state.EditProduct)()
    //     }

    let categoryValue = null
    if(state.EditProduct != null) {
        categoryValue = state.ListOptionCategories.filter((item) => item.value == state.EditProduct.CategoryId)[0]
    }

    let saveHandler = fn.updateProductAsync.bind(this, dispatch, state.EditProduct)

    return (
        <div>
            {
                state.EditProduct != null ?
                (
                    <Modal isOpen={state.IsOpenEditProduct} 
                        toggle={closeHandler}>
                        <ModalHeader toggle={closeHandler}>Update ProducSƯt: {state.EditProductName}</ModalHeader>
                        <ModalBody>
                        <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" 
                                    value={state.EditProduct.Name}
                                    onChange={nameHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label>Image:</label>
                                <input type="text" className="form-control" 
                                    value={state.EditProduct.Image}
                                    onChange={imageHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <input type="text" className="form-control" 
                                    value={state.EditProduct.Description}
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

export default ProductEdit