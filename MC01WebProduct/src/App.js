import './App.scss'
import React, { useReducer } from 'react'
import Reducer from './Reducer'
import InitStore from './InitStore'

import ProductManagement from './components/ProductManagement'
import UserManagement from './components/UserManagement'
import CategoryManagement from './components/CategoryManagement'
import UserDetail from './components/UserDetail'
import UserNew from './components/UserNew'
import ProductNew from './components/ProductNew'
import CategoryNew from './components/CategoryNew'
import CategoryEdit from './components/CategoryEdit'
import ProductEdit from './components/ProductEdit'
import UserEdit from './components/UserEdit'

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames';
import * as constants from './Constants';
import * as fn from './Actions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
    autoClose: 8000,
    draggable: false
})

function App() {

    const [state, dispatch] = useReducer(Reducer, InitStore)

    return (
        <div className="container">
            <h1>Data management</h1>
            <Nav tabs className="mt-2">
                <NavItem>
                    <NavLink
                        className={classnames({ active: state.ActiveTab === constants.TAB_PRODUCT })}
                        onClick={fn.handleChangeTab.bind(this, dispatch, constants.TAB_PRODUCT)}
                        >Product management</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: state.ActiveTab === constants.TAB_USER })}
                        onClick={fn.handleChangeTab.bind(this, dispatch, constants.TAB_USER)}
                        >User management</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: state.ActiveTab === constants.TAB_CATEGORY })}
                        onClick={fn.handleChangeTab.bind(this, dispatch, constants.TAB_CATEGORY)}
                        >Category management</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={state.ActiveTab}>
                <TabPane tabId={constants.TAB_USER}>
                    <UserManagement 
                        state={state} dispatch={dispatch} />
                </TabPane>
                <TabPane tabId={constants.TAB_PRODUCT}>
                    <ProductManagement state={state} dispatch={dispatch} />
                </TabPane>
                <TabPane tabId={constants.TAB_CATEGORY}>
                    <CategoryManagement state={state} dispatch={dispatch} />
                </TabPane>
            </TabContent>
            <ToastContainer />
            <UserDetail state={state} dispatch={dispatch} />
            <UserNew state={state} dispatch={dispatch} />
            <ProductNew state={state} dispatch={dispatch} />
            <CategoryNew state={state} dispatch={dispatch} />
            <CategoryEdit state={state} dispatch={dispatch} />
            <ProductEdit state={state} dispatch={dispatch} />
            <UserEdit state={state} dispatch={dispatch} />
        </div>
    )
}

export default App;