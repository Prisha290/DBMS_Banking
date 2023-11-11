// import React from 'react';
import AdminAppBar from '../admin_appbar';
// import React, { useState } from 'react';
import {TableComponent} from '../../render_json/render'
import React, { useState ,useLocation} from 'react';
import { Navigate, useNavigate,Link } from 'react-router-dom';
// import './login.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin_main.css'



const Admin_main = () => {
  // const location = useLocation();
  // const { data } = location.state || {};

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [jsondata,setjsondata]=useState([]);
  const navigate = useNavigate();
  
  
    const handleSubmit = async (e,req,res) => {
      e.preventDefault();
      console.log(username,password,"HANDLED");
    


      try {
        const response = await fetch('http://localhost:4000/demo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "message":"Fetch details"}),
        });
      
        if (response.ok) {
          // Handle successful login, redirect or show success message
          const data = await response.json(); // Await on response.json() to get the JSON data
          console.log(data);
          if (data.accountno==-1)
          {
            navigate('/notexist');
          }
          else
          {
            setjsondata(data);
          // navigate('/render', { state: { data: data } }); // Pass data to the next route
          // return(<TableComponent data={data.stringify()}/>)
          // navigate('/render', { state: data })
          console.log('Render successful!');
          }
        } 
        else {
          // Handle authentication error, show error message, etc.
          console.error('Render failed');
        }
      } catch (error) {
        // Handle network errors or other issues
        console.error('Error occurred:', error);
      }

    };
    const notify =  (e,req,res) => {
      e.preventDefault();
      navigate("/email");

    }
    const createaccount =  (e,req,res) => {
      e.preventDefault();
      navigate("/create_account");

    }
    const recruit =  (e,req,res) => {
      e.preventDefault();
      navigate("/recruit");

    }
    const unpaid =  (e,req,res) => {
      e.preventDefault();
      navigate("/unpaid");

    }
    const showdetails =  (e,req,res) => {
      e.preventDefault();
      navigate("/ask_account");

    }
    const top3_balance =  (e,req,res) => {
      e.preventDefault();
      navigate("/top3");

    }

  return (
    <div>
      <AdminAppBar> </AdminAppBar>
      {/* {data.employeeid} */}
    <div className="login-container">
      
      <div className="login-box">
        
       
          
          <button class="b1" onClick={showdetails}> Show details</button>
          <br></br><br></br>
          <button class="b1" onClick={unpaid}> Unpaid Loan Customers</button>
          <br></br><br></br>
          <button class="b1" onClick={notify}> Notifications</button>
          <br></br><br></br>
           <button class="b1" onClick={recruit}> Recruit </button>
          <br></br><br></br> 
          <button class="b1" onClick={createaccount}> Create Account </button>
          <br></br><br></br> 
          <button class="b1" onClick={top3_balance}> Top 3 Balance </button>

        
      </div>
    </div>
    </div>
  );
};

export default Admin_main;
