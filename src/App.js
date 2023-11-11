import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
// import { DataProvider} from './frontend/context/DataContext';

import AppBar from './frontend/appBar';
import BankServices from './frontend/home';
import LoginComponent from './frontend/Login/login';
import Next from './frontend/next';
import NotExisting_login from './frontend/Login/notexist';
import EmailForm from './frontend/email/email';
import Admin_main from './frontend/admin/admin_main';
import {TableComponent} from './render_json/render';
// import SwipeableTextMobileStepper from './frontend/buetify/carousel'
import Create_acc from './frontend/admin/create_account/create_account';
import Accountcreated from './frontend/admin/create_account/account_created';
import ShowDetails from './frontend/admin/show_details/showdetails';
import Unpaid from './frontend/admin/unpaid/unpaid';
import Ask_account from './frontend/admin/show_details/ask_account';
import Top3 from './frontend/admin/show_details/top3';
import AdminLoginComponent from './frontend/admin/adminlogin/adminlogin';
const App = () => {
  return (
    <div>
    <Routes>
        <Route exact path ="/" element ={<BankServices/>} />
        <Route exact path ="/login" element ={<LoginComponent/>} />
        <Route exact path ="/next" element ={<Next/>} />
        <Route exact path ="/notexist" element ={<NotExisting_login/>} />
        <Route exact path ="/email" element ={<EmailForm/>} />
        <Route exact path ="/admin_main" element ={<Admin_main/>} />
        <Route exact path ="/admin" element ={<AdminLoginComponent/>} />
        <Route exact path ="/create_account" element ={<Create_acc/>} />
        <Route exact path ="/account_created" element ={<Accountcreated/>} />
        <Route exact path ="/ask_account" element ={<Ask_account/>} />
        <Route exact path ="/showdetails" element ={<ShowDetails/>} />
        <Route exact path ="/unpaid" element ={<Unpaid/>} />
        <Route exact path ="/top3" element ={<Top3/>} />
        {/* <Route exact path ="/carousel" element ={<SwipeableTextMobileStepper/>} /> */}
        {/* <DataProvider> */}
        {/* <Route exact path ="/render" element ={<TableComponent/>} /> */}
        {/* </DataProvider> */}
        
    </Routes>
    </div>
  );
};

export default App;