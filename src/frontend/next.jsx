import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Dropdown from './DROPDOWN/Dropdown';
import Navbar from './DROPDOWN/Navbar';
// function Next({params}) {



    
//     console.log(params)
//     //     const data=params.state.data;
       
//         return (<div ><Navbar/>
//         <h1>IN NEXT PAGE1 {params}</h1></div>);
   
// };

function Next() {
    const location = useLocation();
    const { data } = location.state || {};
    
    // console.log(params)
    //     const data=params.state.data;
       console.log(22);
       console.log(data);
        return (<div ><Navbar/>
        <h1>Welcome {data.accountno} !</h1></div>);
   
};

 
export default Next;



  
  
  
  
  
  