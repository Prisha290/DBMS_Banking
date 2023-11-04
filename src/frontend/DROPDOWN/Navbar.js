import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
//var user =require("../total");
function Navbar() {
  const [dropdown, setDropdown] = useState();
//console.log(user);
  return (
    <>
      
      <nav className="navbar">
        <Link to="../homepage" className="navbar-logo">
            Eminent Bank
          
        </Link>
        
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Products") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
       
      </nav>
    </>
  );
}

export default Navbar;
