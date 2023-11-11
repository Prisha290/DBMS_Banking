import React, { useState, useEffect } from "react";
import Navbar from "../../DROPDOWN/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const Unpaid = () => {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/unpaid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTransactionData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const renderTransactionTable = () => {
    if (transactionData.length === 0) {
        console.log(transactionData);
      return <h1 style={{ textAlign: 'center', padding:'140px' }}>No such customers exist.</h1>;
    }

    return (
    
    <div className="container mt-5 table-responsive">
  <h1 style={{ textAlign: 'center', padding:'40px'} }>Loan Unpaid </h1>
  <table className="table table-dark table-hover table-striped table-bordered" border='true'>
    <thead className="thead-dark">
      <tr>
       
        <th>Account Number</th>        
        <th>Email_Address</th>        
        <th>Mobile No</th>        

      </tr>
    </thead>
    <tbody>
      {transactionData.map((item) => (
         
        <tr >
          <td>{item.AccountNo}</td>
          <td>{item.email}</td>
          <td>{item.mobile}</td>
          {/* <td>{item.username}</td> */}
          
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
        {renderTransactionTable()}
      </div>
    </div>
  );
};

export default Unpaid;