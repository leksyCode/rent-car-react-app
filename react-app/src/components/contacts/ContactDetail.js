import React from "react";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  const { name, email, phone} = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={`${process.env.PUBLIC_URL}/images/user.jpg`} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
          <div className="description">{phone}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/contacts">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
