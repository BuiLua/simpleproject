import * as constants from './Constants'

let InitStore = {
    ListProducts: [],
    ListUsers: [],
    ListCategories: [],
    ActiveTab: constants.TAB_PRODUCT,
    EditingUser: null,
    EditingProduct: null,
    
    NewUser: null,
    IsOpenNewUser: false,
    
    NewProduct: null,
    IsOpenNewProduct: false,
    ListOptionCategories: [],
    
    IsOpenUserDetail: false,
    UserDetail: null,

    NewCategory: null,
    IsOpenNewCategory: false,

    EditCategory: null,
    EditCategoryName: "",
    IsOpenEditCategory: false,

    EditProduct: null,
    EditProductName: "",
    IsOpenEditProduct: false,

    EditUser: null,
    EditUserName: "",
    IsOpenEditUser: false
}

export default InitStore