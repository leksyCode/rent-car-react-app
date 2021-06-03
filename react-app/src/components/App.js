import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ContactsController from "./contacts/ContactsController"
import VehiclesController from "./vehicles/VehiclesController";


function App() {
  return (
    <div className="ui container">  
       <Router>    
       <Header/>  
        <Switch>
          <Route path="/contacts" component={ContactsController} />
          <Route path="/vehicles" component={VehiclesController} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
