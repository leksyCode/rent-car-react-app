import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddVehicle from "./AddVehicle";
import EditCVehicle from "./EditVehicle";
import VehicleList from "./VehicleList";
import VehicleDetail from "./VehicleDetail";
import api from "../api/vehicles";


function App() {
  const LOCAL_STORAGE_KEY = "vehicles";
  const [vehicles, setVehicle] = useState([]);

  //RetrieveContacts
  const retrieveVehicles = async () => {
    const response = await api.get("/vehicles");
    return response.data;
  };

  const addVehicleHandler = async (vehicle) => {
    console.log(vehicle);
    const request = {
      id: uuid(),
      vehicle,
    };

    const response = await api.post("/vehicles", request);
    console.log(response);
    setVehicle([...vehicles, response.data]);
  };

  const updateVehicleHandler = async (vehicle) => {
    const response = await api.put(`/vehicles/${vehicle.id}`, vehicle);
    const { id, brand, model } = response.data;
    setVehicle(
      vehicles.map((vehicle) => {
        return vehicle.id === id ? { ...response.data } : vehicle;
      })
    );
  };

  const removeVehicleHandler = async (id) => {
    await api.delete(`/vehicles/${id}`);
    const newVehicleList = vehicles.filter((vehicle) => {
      return vehicle.id !== id;
    });

    setVehicle(newVehicleList);
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllVehicles = async () => {
      const allContacts = await retrieveVehicles();
      if (allContacts) setVehicle(allContacts);
    };

    getAllVehicles();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(vehicles));
  }, [vehicles]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <VehicleList
                {...props}
                vehicles={vehicles}
                getVehicled={removeVehicleHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddVehicle {...props} addVehicleHandler={addVehicleHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditCVehicle
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

export default App;
