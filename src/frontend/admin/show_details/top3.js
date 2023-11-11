import React, { useState, useEffect } from "react";
import Navbar from "../../DROPDOWN/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const Top3 = () => {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/top3", {
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
      return <p>None matched with request</p>;
    }

    return (
    
    <div className="container mt-5 table-responsive">
  <h1></h1>
  <table className="table table-dark table-hover table-striped table-bordered" border='true'>
    <thead className="thead-dark">
      <tr>
       
        <th>Account Number</th>
        <th>Current_Outstanding</th>
        <th>Customer Id</th>
        <th>Branch </th>

      </tr>
    </thead>
    <tbody>
      {transactionData.map((item) => (
         
        <tr key={item.id}>
          <td>{item.AccountNo}</td>
          <td>{item.Current_Outstanding}</td>
          <td>{item.cust_id}</td>
          <td>{item.branch_code}</td>
          
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

export default Top3;