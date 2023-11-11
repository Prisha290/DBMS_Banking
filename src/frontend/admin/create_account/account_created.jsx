import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Dropdown from '../DROPDOWN/Dropdown';
import AdminNavbar from '../DROPDOWN/AdminNavbar';
// function Next({params}) {



    
//     console.log(params)
//     //     const data=params.state.data;
       
//         return (<div ><Navbar/>
//         <h1>IN NEXT PAGE1 {params}</h1></div>);
   
// };

function Accountcreated() {
    const location = useLocation();
    const { data } = location.state || {};
    
    // console.log(params)
    //     const data=params.state.data;
       console.log(22);
       console.log(data);
        return (<div ><AdminNavbar/>
        <br></br>
        <br></br>
        <h1 align='center'> Account successfully created!<br></br><br></br><br></br>
        Account Number:{data.accountno} <br></br><br></br> DebitCard Number: {data.debitcardno} </h1></div>);
   
};

 
export default Accountcreated;
