import * as constants from './Constants';

function Reducer(state, action) {
    switch (action.type) {
        case constants.FETCH_LIST_PRODUCTS:
            return {
                ...state,
                ListProducts: action.payload
            }
        case constants.FETCH_LIST_USERS:
            return {
                ...state,
                ListUsers: action.payload
            }
        case constants.FETCH_LIST_CATEGORIES:
            return {
                ...state,
                ListCategories: action.payload,
                ListOptionCategories: action.payload.map((item) => {
                    return {
                        value: item.CategoryId,
                        label: item.Name
                    }
                })
            }
        case constants.CHANGE_TAB:
            return {
                ...state,
                ActiveTab: action.payload
            }
        case constants.TOGGLE_DISPLAY_USER_DETAIL:
            return {
                ...state,
                IsOpenUserDetail: !state.IsOpenUserDetail,
                UserDetail: action.payload.userItem
            }
        case constants.TOGGLE_DISPLAY_USER_NEW:
            return {
                ...state,
                IsOpenNewUser: action.payload.isOpen,
                NewUser: action.payload.NewUser
            }
        case constants.CHANGE_USER_NEW:
            return {
                ...state,
                NewUser: action.payload
            }
        case constants.TOGGLE_DISPLAY_PRODUCT_NEW:
            return {
                ...state,
                IsOpenNewProduct: action.payload.isOpen,
                NewProduct: action.payload.NewProduct
            }
        case constants.CHANGE_PRODUCT_NEW:
            return {
                ...state,
                NewProduct: action.payload
            }
        case constants.TOGGLE_DISPLAY_CATEGORY_NEW:
            return {
                ...state,
                IsOpenNewCategory: action.payload.isOpen,
                NewCategory: action.payload.NewCategory
            }
        case constants.CHANGE_CATEGORY_NEW:
            return {
                ...state,
                NewCategory: action.payload
            }
        case constants.TOGGLE_DISPLAY_CATEGORY_EDIT:
            return {
                ...state,
                IsOpenEditCategory: action.payload.isOpen,
                EditCategory: action.payload.categoryItem,
                EditCategoryName: action.payload.categoryItem == null ? "" : action.payload.categoryItem.Name
            }
        case constants.CHANGE_CATEGORY_EDIT:
            return {
                ...state,
                EditCategory: action.payload
            }
        case constants.TOGGLE_DISPLAY_PRODUCT_EDIT:
            return {
                ...state,
                IsOpenEditProduct: action.payload.isOpen,
                EditProduct: action.payload.productItem,
                EditProductName: action.payload.productItem == null ? "" : action.payload.productItem.Name
            }
        case constants.CHANGE_PRODUCT_EDIT:
            return {
                ...state,
                EditProduct: action.payload
            }
        case constants.TOGGLE_DISPLAY_USER_EDIT:
            return {
                ...state,
                IsOpenEditUser: action.payload.isOpen,
                EditUser: action.payload.userItem,
                EditUserName: action.payload.userItem == null ? "" : action.payload.userItem.Name
            }
        case constants.CHANGE_USER_EDIT:
            return {
                ...state,
                EditUser: action.payload
            }
        default:
            return state;
    }
}

export default Reducer