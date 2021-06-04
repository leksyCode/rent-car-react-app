import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
    <div className="ui container center">
    <div className="center">
    <Link to="/contacts"><h2>Customers</h2></Link>
    </div>  
    <div className="center">
    <Link to="/orders"><h2>Orders</h2></Link>
    </div>   
    <div className="center">
    <Link to="/vehicles"><h2>Vehicles</h2></Link>
    </div>       
    </div>
  </div>
  );
};

export default Header;
