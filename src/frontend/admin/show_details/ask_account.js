import React, { useState, useEffect } from "react";
import Navbar from "../../DROPDOWN/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const Ask_account = () => {
    const [transactionData, setTransactionData] = useState([]);
    const [LoanData, setLoanData] = useState([]);
    const [FdData, setFdData] = useState([]);
    const [account, setAccount] = useState('');
    const set_value=(e)=>{
       setAccount(e.target.value);
       console.log(e.target.value);
    }
    const handleraccount = () => {
       
 
    fetch("http://localhost:4000/show_d", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "Account":account})
      
    })
      .then((response) => response.json())
      .then((data) => setTransactionData(data))
      .catch((error) => console.error("Error fetching data:", error));
    }
    const handleraccount1=()=>{
            fetch("http://localhost:4000/show_loan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "Account":account})
            
            })
            .then((response) => response.json())
            .then((data) => setLoanData(data))
            .catch((error) => console.error("Error fetching data:", error));

        }
            


    const handleraccount2=()=>{
            fetch("http://localhost:4000/show_fd", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ "Account":account})
                
            })
                .then((response) => response.json())
                .then((data) => setFdData(data))
                .catch((error) => console.error("Error fetching data:", error));

        }
  
const renderLoanTable = () => {
    if (LoanData.length === 0) {
        console.log(LoanData);
      return <h1 style={{ textAlign: 'center', padding:'140px' }}></h1>;
    }

    return (
    
    <div className="container mt-5 table-responsive">
  <h1>Loan Details</h1>
  <table className="table table-dark table-hover table-striped table-bordered" border='true'>
    <thead className="thead-dark">
      <tr>
       
        <th>Account Number</th>
        <th>Loan ID</th>
        <th>Remaining Amount</th>
        <th>Total Amount</th>
        <th>Last Due</th>
      </tr>
    </thead>
    <tbody>
      {LoanData.map((item) => (
         
        <tr key={item.loanId}>
          <td>{item.acc_no}</td>
          <td>{item.loanId}</td>
          <td>{item.toBePaid}</td>
          <td>{item.amount}</td>
          <td>{item.ltime}</td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>
    );
  };

  const renderFDTable = () => {
    if (FdData.length === 0) {
        console.log(FdData);
      return <h1 style={{ textAlign: 'center', padding:'140px' }}></h1>;
    }

    return (
    
    <div className="container mt-5 table-responsive">
  <h1>FD Details </h1>
  <table className="table table-dark table-hover table-striped table-bordered" border='true'>
    <thead className="thead-dark">
      <tr>
       
        <th>Account Number</th>
        <th>Principal Amount</th>
        <th>Maturity Amount</th>
        <th>Interest rate</th>
        <th>Opening date</th>
        <th>Closing date</th>
      </tr>
    </thead>
    <tbody>
      {FdData.map((item) => (
         
        <tr key={item.id}>
          <td>{item.accountNo}</td>
          <td>{item.principal}</td>
          <td>{item.amount}</td>
          <td>{item.interest}</td>
          <td>{item.openingDate}</td>
          <td>{item.closingDate}</td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>
    );
  };

const renderAccountTable = () => {
    if (transactionData.length === 0) {
        console.log(transactionData);
      return <h1 style={{ textAlign: 'center', padding:'140px' }}>Not valid customer</h1>;
    }

    return (
    
    <div className="container mt-5 table-responsive">
  <h1>Customer Account Details:</h1>
  <table className="table table-dark table-hover table-striped table-bordered" border='true'>
    <thead className="thead-dark">
      <tr>
       
        <th>Account Number</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Current_Outstanding</th>
        <th>Aadhar Number</th>
      </tr>
    </thead>
    <tbody>
      {transactionData.map((item) => (
         
        <tr key={item.id}>
          <td>{item.AccountNo}</td>
          <td>{item.FirstName}</td>
          <td>{item.LastName}</td>
          <td>{item.Current_Outstanding}</td>
          <td>{item.AadharNo}</td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>
    );
  };

  return (
    <div>
        <Navbar/>
      {/* <div className="heading"><h1 className="t1">Your Transactions</h1></div> */}
      <div className="transaction-table-container">

        <div style={{ textAlign: 'center', padding:'40px' }} class="entry">
        <h2>Enter Account Number:</h2>
        <input style={{ textAlign: 'center', padding:'10px' }} class="acc_input" type="number" onChange={set_value} ></input>
        <button class="search"style={{ padding:'10px'}} onClick={handleraccount}>Search </button>
        <button class="search"style={{ padding:'10px'}} onClick={handleraccount1}>Loans </button>
        <button class="search"style={{ padding:'10px'}} onClick={handleraccount2}>Fixed Deposit </button>
        </div>
      </div>
      <div className="transaction-table-container">
        {renderAccountTable()}
      </div>
      <div className="transaction-table-container">
        {renderLoanTable()}
      </div>
      <div className="transaction-table-container">
        {renderFDTable()}
      </div>



    </div>
  );
  };

export default Ask_account;