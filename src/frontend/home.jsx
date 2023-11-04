import React from 'react';
import './home.css'; // Import your CSS file
import AppBar from './appBar';
const BankServices = () => {
  return (
    
    
    <div className="bank-services">
        <AppBar ></AppBar>
      <div className="hero-section">
        <h1>Welcome to Eminent Bank</h1>
        <h2>Your Goals, Our Commitment. <br></br>
Your Trusted Partner in Banking Solutions</h2>
      </div>
      <div className="services">
        <div className="service-card">
          <h2>Personal Accounts</h2>
          <p>Manage your personal finances with ease.</p>
        </div>
        <div className="service-card">
          <h2>Business Accounts</h2>
          <p>Optimized solutions for your business needs.</p>
        </div>
        <div className="service-card">
          <h2>Loans and Mortgages</h2>
          <p>Flexible loan options and competitive mortgage rates.</p>
        </div>
      </div>
    </div>
  );
};

export default BankServices;
