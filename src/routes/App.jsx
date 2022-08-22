import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Layout from '@containers/Layout.jsx';
import Home from '@pages/Home.jsx';
import NotFound from '@pages/NotFound.jsx';
import Login from '@pages/Login.jsx';
import RecoveryPassword from '@pages/RecoveryPassword.jsx';
import CheckOut from '@pages/Checkout.jsx';
import CreateAccount from '@pages/CreateAccount.jsx';
import MyAccount from '@pages/MyAccount.jsx';
import NewPassword from '@pages/NewPassword.jsx';
import Orders from '@pages/Orders.jsx';
import SendEmail from '@pages/SendEmail.jsx';
import AppContext from '../context/AppContext.js'
import useInitialState from "../hooks/useInitialState.js";
import '@styles/global.scss';


const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/home" element={<Navigate to="/" />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/checkout" element={<CheckOut />} />
                        <Route path="/create-account" element={<CreateAccount />} />
                        <Route path="/my-account" element={<MyAccount />} />
                        <Route path="/new-password" element={<NewPassword />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/send-email" element={<SendEmail />} />
                        <Route path="/recovery-password" element={<RecoveryPassword/>} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;