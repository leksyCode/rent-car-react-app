import React from "react";

class AddVehicle extends React.Component {
  state = {
    brand: "",
    model: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.brand === "" || this.state.model === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addVehicleHandler(this.state);
    this.setState({ brand: "", model: "" });
    this.props.history.push("/vehicles");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Car</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Vehicle</label>
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={this.state.brand}
              onChange={(e) => this.setState({ brand: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Model</label>
            <input
              type="text"
              name="model"
              placeholder="Model"
              value={this.state.model}
              onChange={(e) => this.setState({ model: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddVehicle;
