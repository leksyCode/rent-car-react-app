import React from "react";
import { Link } from "react-router-dom";
import VehicleCard from "./VehicleCard";

const VehicleList = (props) => {
  console.log(props);

  const deleteVehicleHandler = (id) => {
    props.getVehicleId(id);
  };

  let vehicleCount = 0;

  props.vehicles.forEach(element => {
    if(parseInt(element.count)) {
      vehicleCount += parseInt(element.count);
    }
  });

  const renderVehicleList =  props.vehicles.map((vehicle) => {
    return (
      <VehicleCard
        vehicle={vehicle}
        clickHander={deleteVehicleHandler}
        key={vehicle.id}
      />
    );
  });

  return (
    <div className="main">
      <br/>
      <h2>
       Left in stock: {vehicleCount} cars 
        <Link to="/vehicles/add">
          <button className="ui button blue right">Add Vehicle</button>
        </Link>
      </h2>    
      <div className="ui celled list">{renderVehicleList}</div>
    </div>
  );
};

export default VehicleList;
