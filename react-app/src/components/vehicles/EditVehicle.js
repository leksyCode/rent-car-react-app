import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, brand, model, constructionYear, vehicleType, fuelType, picture, numberOfSeats, pricePerDay, count} = props.location.state.vehicle;
    this.state = {
      id,
      brand,
      model,
      constructionYear,
      vehicleType,
      fuelType,
      picture,
      numberOfSeats,
      pricePerDay,
      count
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.brand === "" || this.state.model === "" || this.state.constructionYear === "" ||
    this.state.vehicleType === "" || this.state.fuelType === "" ||  this.state.picture === ""||
    this.state.numberOfSeats === null || this.state.pricePerDay === null || this.state.count === null) {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateVehicleHandler(this.state);
    this.setState({ brand: "", model: "", constructionYear: ""});
    this.props.history.push("/vehicles");
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
          <div className="field">
            <label>Construction year</label>
            <input
              type="year"
              name="constructionYear"
              placeholder="Year"
              value={this.state.constructionYear}
              onChange={(e) => this.setState({ constructionYear: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Car type</label>
            <input
              type="text"
              name="vehicleType"
              placeholder="Car type"
              value={this.state.vehicleType}
              onChange={(e) => this.setState({ vehicleType: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Engine type</label>
            <input
              type="text"
              name="fuelType"
              placeholder="Engine type"
              value={this.state.fuelType}
              onChange={(e) => this.setState({ fuelType: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Number of seats</label>
            <input
              type="number"
              name="numberOfSeats"
              placeholder="Number of seats"
              value={this.state.numberOfSeats}
              onChange={(e) => this.setState({ numberOfSeats: e.target.value })}
            />
          </div>
          <div className="field">
            <form>
              <label for="cars">Choose a picture:</label>
                <select name="cars" id="cars" onChange={(e) => this.setState({ picture: e.target.value })}>
                  <option value="urus.jpg">Lamborghini Urus 2021</option>
                  <option value="bmwE60.jpg">BMW e60 5 series 530i</option>
                  <option value="passat.jpg">VolksWagen Passat 2009</option>
                  <option value="audiQrs.jpg">Audi RS Q8 2020</option>
                </select>
            </form>
          </div>
          <div className="field">
            <label>Price per day $</label>
            <input
              type="number"
              name="pricePerDay"
              placeholder="Price per day"
              value={this.state.pricePerDay}
              onChange={(e) => this.setState({ pricePerDay: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Available cars</label>
            <input
              type="number"
              name="count"
              placeholder="Available"
              value={this.state.count}
              onChange={(e) => this.setState({ count: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
