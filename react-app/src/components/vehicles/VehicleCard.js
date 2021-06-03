import React from "react";
import { Link } from "react-router-dom";

const VehicleCard = (props) => {
  const { id, brand, model, constructionYear, vehicleType, fuelType, numberOfSeats, picture, pricePerDay, count} = props.vehicle;
  const imageUrl = `${process.env.PUBLIC_URL}/images/` + picture;
  return (
    <div className="item">

      <h2 className="header left">{brand} {model} </h2>
      <img className="ui car image" src={imageUrl} alt="car"/>     

      <div className="content">     
        <Link to={{ pathname: `/vehicle/${id}`, state: { vehicle: props.vehicle } }}>                 
        <h3 className="description">Price: {pricePerDay}$ / day</h3> 
                <div className="description"><h4>year: {constructionYear}</h4></div>
                <div className="description"><h4>type: {vehicleType}</h4></div>
                <div className="description"><h4>engine: {fuelType}</h4></div>
                <div className="description"><h4>seats: {numberOfSeats}</h4></div>
                <div className="description"><h4>available: {count} cars</h4></div>    
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
