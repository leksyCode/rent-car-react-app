import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../../api/vehicles";
import "../App.css";
import AddVehicle from "./AddVehicle";
import VehicleList from "./VehicleList";
import VehicleDetail from "./VehicleDetail";
import EditVehicle from "./EditVehicle";

function VehiclesController() {
  const [vehicles, setVehicles] = useState([]);

  //RetrieveVehicles
  const retrieveVehicles = async () => {
    const response = await api.get();
    return response.data;
  };

  const addVehicleHandler = async (vehicle) => {
    console.log(vehicle);
    const request = {
      id: uuid(),
      ...vehicle,
    };

    const response = await api.post("/", request);
    console.log(response);
    setVehicles([...vehicles, response.data]);
  };

  const updateVehicleHandler = async (vehicle) => {
    const response = await api.put(`${vehicle.id}`, vehicle);
    const { id, brand, model } = response.data;
    setVehicles(
      vehicles.map((vehicle) => {
        return vehicle.id === id ? { ...response.data } : vehicle;
      })
    );
  };

  const removeVehicleHandler = async (id) => {
    await api.delete(`${id}`);
    const newVehicleList = vehicles.filter((vehicle) => {
      return vehicle.id !== id;
    });

    setVehicles(newVehicleList);
  };

  useEffect(() => {
    const getAllVehicles = async () => {
      const allVehicles = await retrieveVehicles();
      if (allVehicles) setVehicles(allVehicles);
    };

    getAllVehicles();
  }, []);

  useEffect(() => {
  }, [vehicles]);

  return (
    <div className="ui container">
      <Router>    
        <Switch>
          <Route
            path="/vehicles"
            exact
            render={(props) => (
              <VehicleList
                {...props}
                vehicles={vehicles}
                getVehicleId={removeVehicleHandler}
              />
            )}
          />
          <Route
            path="/vehicles/add"
            render={(props) => (
              <AddVehicle {...props} addVehicleHandler={addVehicleHandler} />
            )}
          />

          <Route
            path="/vehicles/edit"
            render={(props) => (
              <EditVehicle
                {...props}
                updateVehicleHandler={updateVehicleHandler}
              />
            )}
          />

          <Route path="/vehicle/:id" component={VehicleDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default VehiclesController;
