import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Dropdown from './DROPDOWN/Dropdown';
import Navbar from './DROPDOWN/Navbar';

function Next() {
    const location = useLocation();
    const { data } = location.state || {};
    
    // console.log(params)
    //     const data=params.state.data;
       console.log(22);
       console.log(data);
        return (<div ><Navbar/>
        <h1>Welcome Account:{data.AccountNo} Name:{data.first_Name} !</h1></div>);
   
};

 
export default Next;



  
  
  
  
  
  