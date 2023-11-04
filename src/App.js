import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import AppBar from './frontend/appBar';
import BankServices from './frontend/home';
import LoginComponent from './frontend/Login/login';
import Next from './frontend/next';
import NotExisting_login from './frontend/Login/notexist';
import EmailForm from './frontend/email/email';
// import 
const App = () => {
  return (
    <div>
    <Routes>
        <Route exact path ="/" element ={<BankServices/>} />
        <Route exact path ="/login" element ={<LoginComponent/>} />
        <Route exact path ="/next" element ={<Next/>} />
        <Route exact path ="/notexist" element ={<NotExisting_login/>} />
        <Route exact path ="/email" element ={<EmailForm/>} />
        
    </Routes>
    </div>
  );
};

export default App;