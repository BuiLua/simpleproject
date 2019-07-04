import * as constants from './Constants'
import axios from 'axios'
import { toast } from 'react-toastify'

export function handleChangeTab(dispatch, tabId) {
    dispatch({type: constants.CHANGE_TAB, payload: tabId})
}

export async function getListProductsAsync(dispatch) {
    try {
        const response = await axios.get(constants.ProductResourceUrl)
        toast.success("Loaded list products!", {
            position: toast.POSITION.TOP_RIGHT
        })
        dispatch({
            type: constants.FETCH_LIST_PRODUCTS,
            payload: response.data.Data
        })
    } catch (error) {
        console.error(error)
        toast.error("Error loading!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export async function getListUsersAsync(dispatch) {
    try {
        const response = await axios.get(constants.UserResourceUrl)
        toast.success("Loaded list users!", {
            position: toast.POSITION.TOP_RIGHT
        })
        dispatch({
            type: constants.FETCH_LIST_USERS,
            payload: response.data.Data
        })
    } catch (error) {
        console.error(error)
        toast.error("Error loading!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export async function getListCategoriesAsync(dispatch) {
    try {
        const response = await axios.get(constants.CategoryResourceUrl)
        toast.success("Loaded list categories!", {
            position: toast.POSITION.TOP_RIGHT
        })
        dispatch({
            type: constants.FETCH_LIST_CATEGORIES,
            payload: response.data.Data
        })
    } catch (error) {
        console.error(error)
        toast.error("Error loading!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export function toggleDiplayUserDetail(dispatch, userItem) {
    dispatch({
        type: constants.TOGGLE_DISPLAY_USER_DETAIL,
        payload: {
            userItem
        }
    })
}

export async function likeProductAsync(dispatch, userId, productId, status) {
    try {
        const response = await axios.post(constants.UserProductResourceUrl, {
            UserId: userId,
            ProductId: productId,
            IsLiked: status
        })
        toggleDiplayUserDetail(dispatch, null)
        if(status) {
            toast.success("Liked this product!", {
                position: toast.POSITION.TOP_RIGHT
            })
        } else {
            toast.success("Unliked this product!", {
                position: toast.POSITION.TOP_RIGHT
            })
        }

        await getListUsersAsync(dispatch)
        await getListProductsAsync(dispatch)
    } catch (error) {
        console.error(error)
        toast.error("Error loading!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export function toggleDisplayUserNew(dispatch, isOpen) {
    if(isOpen) {
        dispatch({
            type: constants.TOGGLE_DISPLAY_USER_NEW,
            payload: {
                isOpen,
                NewUser: {
                    Name:"",
                    Email: ""
                }
            }
        })
    } else {
        dispatch({
            type: constants.TOGGLE_DISPLAY_USER_NEW,
            payload: {
                isOpen,
                NewUser: null
            }
        })
    }
}

export function changeNewUserData(dispatch, newUser) {
    dispatch({
        type: constants.CHANGE_USER_NEW,
        payload: newUser
    })
}

export async function addNewUserAsync(dispatch, newUser) {
    try {
        if(newUser.Email && newUser.Email !== ''
        && newUser.Name && newUser.Name !== '') {
            const response = await axios.post(constants.UserResourceUrl, newUser)
            toggleDisplayUserNew(dispatch, false)
            if(response.data.Data) {
                toast.success("Added new user successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                })
                await getListUsersAsync(dispatch)
            } else {
                toast.error("Invalid data when adding!", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        } else {
            toast.error("Invalid data!", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    } catch (error) {
        console.error(error)
        toast.error("Error loading!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export function toggleDisplayProductNew(dispatch, isOpen) {
    if(isOpen) {
        dispatch({
            type: constants.TOGGLE_DISPLAY_PRODUCT_NEW,
            payload: {
                isOpen,
                NewProduct: {
                    Name:"",
                    Image: "",
                    Description: ""
                }
            }
        })
    } else {
        dispatch({
            type: constants.TOGGLE_DISPLAY_PRODUCT_NEW,
            payload: {
                isOpen,
                NewProduct: null
            }
        })
    }
}

export function changeNewProductData(dispatch, newProduct) {
    dispatch({
        type: constants.CHANGE_PRODUCT_NEW,
        payload: newProduct
    })
}

export async function addNewProductAsync(dispatch, newProduct) {
    try {
        if(newProduct.Name && newProduct.Name !== '' &&
            newProduct.Image && newProduct.Image !== '' &&
            newProduct.Description && newProduct.Description !== ''
        ) {
            const response = await axios.post(constants.ProductResourceUrl, {
                ...newProduct,
                CategoryId: newProduct.Category.value
            })
            toggleDisplayProductNew(dispatch, false)
            if(response.data.Data) {
                toast.success("Added new product successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                })
                await getListProductsAsync(dispatch)
            } else {
                toast.error("Invalid data when adding!", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        } else {
            toast.error("Invalid data!", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    } catch (error) {
        console.error(error)
        toast.error("Error loading!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export function toggleDisplayCategoryNew(dispatch, isOpen) {
    if(isOpen) {
        dispatch({
            type: constants.TOGGLE_DISPLAY_CATEGORY_NEW,
            payload: {
                isOpen,
                NewCategory: {
                    Name:""
                }
            }
        })
    } else {
        dispatch({
            type: constants.TOGGLE_DISPLAY_CATEGORY_NEW,
            payload: {
                isOpen,
                NewCategory: null
            }
        })
    }
}

export function changeNewCategoryData(dispatch, newCategory) {
    dispatch({
        type: constants.CHANGE_CATEGORY_NEW,
        payload: newCategory
    })
}

export async function addNewCategoryAsync(dispatch, newCategory) {
    try {
        if(newCategory.Name && newCategory.Name !== '') {
            const response = await axios.post(constants.CategoryResourceUrl, newCategory)
             toggleDisplayCategoryNew(dispatch, false)
            if(response.data.Data) {
                toast.success("Added new category successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                })
                await getListCategoriesAsync(dispatch)
            } else {
                toast.error("Invalid data when adding!", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        } else {
            toast.error("Invalid data!", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    } catch (error) {
        console.error(error)
        toast.error("Error loading!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export function toggleDisplayCategoryEdit(dispatch, isOpen, categoryItem) {
    if(isOpen) {
        dispatch({
            type: constants.TOGGLE_DISPLAY_CATEGORY_EDIT,
            payload: {
                isOpen,
                categoryItem
            }
        })
    } else {
        dispatch({
            type: constants.TOGGLE_DISPLAY_CATEGORY_EDIT,
            payload: {
                isOpen
            }
        })
    }
}

export function changeEditCategoryData(dispatch, editCategory) {
    dispatch({
        type: constants.CHANGE_CATEGORY_EDIT,
        payload: editCategory
    })
}

export async function updateCategoryAsync(dispatch, editCategory) {
    try {
        if(editCategory.Name && editCategory.Name !== '') {
            const response = await axios.put(constants.CategoryResourceUrl +"/"+ editCategory.CategoryId, editCategory)
             toggleDisplayCategoryEdit(dispatch, false)
            if(response.data.Data) {
                toast.success("Update category successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                })
                await getListCategoriesAsync(dispatch)
            } else {
                toast.error("Invalid data when adding!", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        } else {
            toast.error("Invalid data!", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    } catch (error) {
        console.error(error)
        toast.error("Error loading!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export function toggleDisplayProductEdit(dispatch, isOpen, productItem) {
    if(isOpen) {
        dispatch({
            type: constants.TOGGLE_DISPLAY_PRODUCT_EDIT,
            payload: {
                isOpen,
                productItem
            }
        })
    } else {
        dispatch({
            type: constants.TOGGLE_DISPLAY_PRODUCT_EDIT,
            payload: {
                isOpen
            }
        })
    }
}

export function changeEditProductData(dispatch, editProduct) {
    dispatch({
        type: constants.CHANGE_PRODUCT_EDIT,
        payload: editProduct
    })
}

export async function updateProductAsync(dispatch, editProduct) {
    try {
        if(editProduct.Name && editProduct.Name !== '' &&
            editProduct.Image && editProduct.Image !== '' &&
            editProduct.Description && editProduct.Description !== ''
        ) {
            const response = await axios.put(constants.ProductResourceUrl +"/"+ editProduct.ProductId, editProduct)
            // {
            //     ...editProduct,
            //     CategoryId: editProduct.Category.value
            // }
             toggleDisplayProductEdit(dispatch, false)
            if(response.data.Data) {
                toast.success("Update product successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                })
                await getListProductsAsync(dispatch)
            } else {
                toast.error("Invalid data when adding!", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        } else {
            toast.error("Invalid data!", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    } catch (error) {
        console.error(error)
        toast.error("Error loading!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export function toggleDisplayUserEdit(dispatch, isOpen, userItem) {
    if(isOpen) {
        dispatch({
            type: constants.TOGGLE_DISPLAY_USER_EDIT,
            payload: {
                isOpen,
                userItem
            }
        })
    } else {
        dispatch({
            type: constants.TOGGLE_DISPLAY_USER_EDIT,
            payload: {
                isOpen
            }
        })
    }
}

export function changeEditUserData(dispatch, editUser) {
    dispatch({
        type: constants.CHANGE_USER_EDIT,
        payload: editUser
    })
}

export async function updateUserAsync(dispatch, editUser) {
    try {
        if(editUser.Name && editUser.Name !== '' && editUser.Email && editUser.Email !== '') {
            const response = await axios.put(constants.UserResourceUrl +"/"+ editUser.UserId, editUser)
             toggleDisplayUserEdit(dispatch, false)
            if(response.data.Data) {
                toast.success("Update user successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                })
                await getListUsersAsync(dispatch)
            } else {
                toast.error("Invalid data when adding!", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        } else {
            toast.error("Invalid data!", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    } catch (error) {
        console.error(error)
        toast.error("Error loading!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export async function deleteCategoryAsync(dispatch, categoryItem) {
    try {
        if(window.confirm('Are you sure?')) {
            const response = await axios.delete(constants.CategoryResourceUrl +"/"+ categoryItem.CategoryId)
            if(response.data.Data) {
                toast.success("Delete category successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                })
                await getListCategoriesAsync(dispatch)
            } else {
                toast.error("Invalid data when adding!", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        } else {
            toast.error("Invalid data!", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    } catch (error) {
        console.error(error)
        toast.error("Error loading!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export async function deleteUserAsync(dispatch, userItem) {
    try {
        if(window.confirm('Are you sure?')) {
            const response = await axios.delete(constants.UserResourceUrl +"/"+ userItem.UserId)
            if(response.data.Data) {
                toast.success("Delete user successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                })
                await getListUsersAsync(dispatch)
            } else {
                toast.error("Invalid data when adding!", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        } else {
            toast.error("Invalid data!", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    } catch (error) {
        console.error(error)
        toast.error("Error loading!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

export async function deleteProductAsync(dispatch, productItem) {
    try {
        if(window.confirm('Are you sure?')) {
            const response = await axios.delete(constants.ProductResourceUrl +"/"+ productItem.ProductId)
            if(response.data.Data) {
                toast.success("Delete product successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                })
                await getListProductsAsync(dispatch)
            } else {
                toast.error("Invalid data when adding!", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        } else {
            toast.error("Invalid data!", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    } catch (error) {
        console.error(error)
        toast.error("Error loading!", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}