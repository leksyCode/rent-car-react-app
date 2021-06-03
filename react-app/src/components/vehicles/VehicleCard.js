import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/user.png";

const VehicleCard = (props) => {
  const { id, brand, model } = props.vehicle;
  return (
    <div className="item">
      <img className="ui avatar image" src={image} alt="car" />
      <div className="content">
        <Link
          to={{ pathname: `/vehicle/${id}`, state: { vehicle: props.vehicle } }}
        >
          <div className="header">{brand}</div>
          <div>{model}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `vehicles/edit`, state: { vehicle: props.vehicle } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default VehicleCard;
