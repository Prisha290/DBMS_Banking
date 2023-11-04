import React, { useState } from 'react';
import { Navigate, useNavigate,Link } from 'react-router-dom';
import './login.css'; // Import your CSS file
import AppBar from '../appBar'
import Next from '../next'
// const cors = require('cors')


const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  
    const handleSubmit = async (e,req,res) => {
      e.preventDefault();
      console.log(username,password);
      // try {
      //   const response = await fetch('http://localhost:4000/logged_in', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({"username":username,"password":password}),
      //   });
  
      //   if (response.ok) {
      //     // Handle successful login, redirect or show success message
      //     console.log(response.json());
      //     navigate({
      //       pathname: '/next',
      //       state: { data: response.json() },
      //     })
      //     console.log('Login successful!');
      //   } else {
      //     // Handle authentication error, show error message, etc.
      //     console.error('Login failed');
      //   }

      // }
     
      
      // catch (error) {
      //   // Handle network errors or other issues
      //   console.error('Error occurred:', error);
      // }


      try {
        const response = await fetch('http://localhost:4000/logged_in', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "username": username, "password": password }),
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
          navigate('/next', { state: { data: data } }); // Pass data to the next route
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
        <h2>Eminent Bank</h2>
        <form onSubmit={handleSubmit} type="post" >
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit"> Login</button>
          {/* <button type="submit"><Link to="/logged_in">Login </Link></button> */}
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginComponent;

