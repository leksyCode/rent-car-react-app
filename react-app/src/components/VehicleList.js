import React from "react";
import { Link } from "react-router-dom";
import VehicleCard from "./VehicleCard";

const VehicleList = (props) => {
  console.log(props);

  const deleteVehicleHandler = (id) => {
    props.getContactId(id);
  };

  const renderVehicleList = props.vehicles.map((vehicle) => {
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
      <h2>
        Vehicles List
        <Link to="/add">
          <button className="ui button blue right">Add Vehicle</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderVehicleList}</div>
    </div>
  );
};

export default VehicleList;
