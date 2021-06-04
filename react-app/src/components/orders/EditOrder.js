import React from "react";

class EditOrder extends React.Component {
  constructor(props) {
    super(props);
    const { id, startDate, endDate, vehicleId, contactId} = props.location.state.order;
    this.state = {
      id,
      startDate,
      endDate,
      vehicleId,
      contactId
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.startDate === "" || this.state.endDate === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ startDate: "", endDate: "" });
    this.props.history.push("/orders");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Start date</label>
            <input
              type="date"
              name="startDate"
              placeholder="Start date"
              value={this.state.startDate}
              onChange={(e) => this.setState({ startDate: e.target.value })}
            />
          </div>

          <div className="field">
            <label>End date</label>
            <input
              type="date"
              name="endDate"
              placeholder="End date"
              value={this.state.endDate}
              onChange={(e) => this.setState({ endDate: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditOrder;
