import React, { useState } from 'react';
import { Navigate, useNavigate,Link } from 'react-router-dom';
// Import your CSS file
import AppBar from '../../appBar'

// const cors = require('cors')


const AdminLoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  
    const handleSubmit = async (e,req,res) => {
      e.preventDefault();
      console.log(username,password,"HANDLE");
    


      try {
        const response = await fetch('http://localhost:4000/adminlogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "username": username, "password": password }),
        });
      
        if (response.ok) {
          // Handle successful login, redirect or show success message
          const data = await response; // Await on response.json() to get the JSON data
          console.log(data);
          if (data.accountno==-1)
          {
            navigate('/notexist');
          }
          else
          {
          navigate('/admin_main'); // Pass data to the next route
          console.log('Login successful!');
          }
        } else {
          // Handle authentication error, show error message, etc.
          console.error('Login failed');
        }
      } catch (error) {
        // Handle network errors or other issues
        console.error('Error occurred:', error);
      }

    };

  return (
    <div>
      <AppBar> </AppBar>
    <div className="login-container">
      
      <div className="login-box">
       
        <form onSubmit={handleSubmit} type="post" >
          <div className="input-group">
            <label class="user">Username:</label>
            <input class="i34"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label class="user">Password:</label>
            <input class="i34"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button class="B23" type="submit"> Login</button>
          {/* <button type="submit"><Link to="/logged_in">Login </Link></button> */}
        </form>
      </div>
    </div>
    </div>
  );
};

export default AdminLoginComponent;