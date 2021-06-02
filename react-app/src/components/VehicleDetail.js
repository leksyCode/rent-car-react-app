import React from "react";
import { Link } from "react-router-dom";
import image from "../images/user.jpg";

const VehicleDetail = (props) => {
  const { brand, model } = props.location.state.vehicle;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={image} alt="car" />
        </div>
        <div className="content">
          <div className="header">{brand}</div>
          <div className="description">{model}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to vehicles list
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VehicleDetail;
