import React from "react";
import { Link } from "react-router-dom";

const VehicleDetail = (props) => {
  const { id, brand, model, constructionYear, vehicleType, fuelType, pricePerDay, numberOfSeats, count, picture} = props.location.state.vehicle;
  const imageUrl = `${process.env.PUBLIC_URL}/images/` + picture;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image ">
          <img src={imageUrl} alt="car" />
        </div>
        <div className="content">
          <div className="header">{brand} {model}</div>
          <div className="description"><h4>year: {constructionYear}</h4></div>
          <div className="description"><h4>type: {vehicleType}</h4></div>
          <div className="description"><h4>engine: {fuelType}</h4></div>
          <div className="description"><h4>seats: {numberOfSeats}</h4></div>
          <div className="description"><h4>available: {count} cars</h4></div>   

          <h3 className="description">Price: {pricePerDay}$ / day</h3>      
          <Link to="/vehicles">
          <button className="ui button yellow right">
            Back to vehicles list
          </button>
        </Link> 
        <Link to= {{pathname : "/orders/add", state: { vehicleId: id }}}>
          <button className="ui button yellow left">
            Order
          </button>
        </Link>
     
        </div>      
      </div>
    </div>
  );
};

export default VehicleDetail;
