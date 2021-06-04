import React from "react";

class AddOrder extends React.Component {
  state = {
    startDate: "",
    endDate: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.startDate === "" || this.state.endDate === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addOrderHandler(this.state);
    this.setState({ startDate: "", endDate: ""});
    this.props.history.push("/orders");
  };
  render() {
    return (    
      <div className="ui main">     
        <h2>Add Order</h2>
        <form className="ui form" onSubmit={this.add}>
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
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddOrder;
