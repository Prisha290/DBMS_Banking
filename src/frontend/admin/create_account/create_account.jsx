import { Navigate, useNavigate,Link } from 'react-router-dom'

import React, { useState } from 'react';
import axios from 'axios';
import AppBar from '../../appBar';
import "./createacc.css"

const CreateAcc = () => {
  const [formData, setFormData] = useState({
    First_Name: '',
    Last_Name: '',
    Door_No: '',
    Street: '',
    city: '', // Changed from 'City' to 'city'
    Pan_Number: '',
    Aadhar_Number: '',
    Driving_License: '',
    Phone_Number: '', // Changed from 'Phone_No' to 'Phone_Number'
    Email_Address: '',
    MinDeposit:'',
    BranchCode:''
  });

  const navigate = useNavigate();
  const createAccount = async () => {
    try {
        const response=await axios.post('http://localhost:4000/create_account',formData);
        console.log(response);
        if (response.statusText=="OK") {
            // Handle successful login, redirect or show success message
            const data = await response; // Await on response.json() to get the JSON data
            console.log(response.data);
            console.log(response.data.accountno,response.data.debitcardno);
            if (data)
            {
              // navigate('/notexist');
              console.log(data.data);
              console.log('Account created successfully');
              navigate('/account_created',{ state: { data: data.data } });
            }
            else
            {
              
            // navigate('/render', { state: { data: data } }); // Pass data to the next route
            // return(<TableComponent data={data.stringify()}/>)
            // navigate('/render', { state: data })
            console.log("SOMETHING WRONG!");
          
        
            }
          } 
          else {
            // Handle authentication error, show error message, etc.
            console.error('Render not possible');
          }

    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    
    <div>
      <AppBar> </AppBar>
      <div class="d13"  >
      <input class="i2" type="text" name="First_Name" placeholder="First Name" onChange={handleInputChange} />
      <input class="i2" type="text" name="Last_Name" placeholder="Last Name" onChange={handleInputChange} />
      <input class="i2" type="number" name="Door_No" placeholder="Door Number" onChange={handleInputChange} />
      <input class="i2" type="text" name="Street" placeholder="Street" onChange={handleInputChange} />

      {/* <label class="i2" htmlFor="exampleInput">Select City:</label> */}
      
      <select class="i2" id="city" name="city" value={formData.city}  onChange={handleInputChange}>
        <option >Select City</option>
        <option value="bangalore">Bangalore</option>
        <option value="chennai">Chennai</option>
        <option value="mumbai">Mumbai</option>
        <option value="mysore">Mysore</option>
        <option value="hyderabad">Hyderabad</option>
      </select>

      <input class="i2" type="text" name="Pan_Number" placeholder="Pan Number" onChange={handleInputChange} />
      <input class="i2" type="text" name="Aadhar_Number" placeholder="Aadhar Number" onChange={handleInputChange} />
      <input class="i2" type="text" name="Driving_License" placeholder="Driving License (NULL if not applicable)" onChange={handleInputChange} />
      <input class="i2" type="number" name="Phone_Number" placeholder="Phone Number" onChange={handleInputChange} />
      <input class="i2" type="email" name="Email_Address" placeholder="Email Address" onChange={handleInputChange} />
      <input class="i2" type="float" name="MinDeposit" placeholder="MinDeposit" onChange={handleInputChange} />
      <input class="i2" type="text" name="BranchCode" placeholder="BranchCode" onChange={handleInputChange} />

      <button class="b2"onClick={createAccount}>Create Account</button>
   
    </div>
    </div>
  );
};

export default CreateAcc;
