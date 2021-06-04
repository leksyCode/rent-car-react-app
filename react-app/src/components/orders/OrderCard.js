import React from "react";
import { Link } from "react-router-dom";

const OrderCard = (props) => {
  const { id, startDate, endDate, vehicleId, customerId} = props.order;
  return (
    <div className="item">
      {/* <img className="ui avatar image" src={`${process.env.PUBLIC_URL}/images/user.jpg`} alt="user" /> */}
      <div className="content">
        <Link
          to={{ pathname: `/orders/${id}`, state: { order: props.order } }}
        >
         <div>{id}</div>
          <div>{startDate}</div>
          <div>{endDate}</div>
          <div>{vehicleId}</div>
          <div>{customerId}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/orders/edit`, state: { order: props.order } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default OrderCard;
