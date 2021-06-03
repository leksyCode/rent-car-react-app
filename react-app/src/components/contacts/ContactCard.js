import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email, phone} = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={`${process.env.PUBLIC_URL}/images/user.jpg`} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/contacts/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
          <div>{phone}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/contacts/edit`, state: { contact: props.contact } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
