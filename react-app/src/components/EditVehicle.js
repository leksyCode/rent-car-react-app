import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, brand, model } = props.location.state.vehicle;
    this.state = {
      id,
      brand,
      model,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.brand === "" || this.state.model === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateVehicleHandler(this.state);
    this.setState({ brand: "", model: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Vehicle</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Brand</label>
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
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
