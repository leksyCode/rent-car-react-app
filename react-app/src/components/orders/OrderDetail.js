import React from "react";
import { Link } from "react-router-dom";

const OrderDetail = (props) => {
  const { startDate, endDate, vehicleId, contactId} = props.location.state.order;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="content">
          <div className="header">{startDate}</div>
          <div className="description">{endDate}</div>
          <div className="description">{vehicleId}</div>
          <div className="description">{contactId}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/orders">
          <button className="ui button blue center">
            Back to Orders List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderDetail;
