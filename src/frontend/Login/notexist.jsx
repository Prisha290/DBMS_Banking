import React, { useState } from 'react';
import { Navigate, useNavigate,Link } from 'react-router-dom';
import './login.css'; // Import your CSS file
import AppBar from '../appBar'
import Next from '../next'
// const cors = require('cors')


const NotExisting_login = () => {

  return (
  <div>
    <AppBar></AppBar>
    USER DOESN"T EXIST.
  </div>)  ;  

};

export default NotExisting_login;
