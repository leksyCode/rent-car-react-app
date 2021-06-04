import React from "react";
import { Link } from "react-router-dom";
import OrderCard from "./OrderCard.js";

const OrderList = (props) => {
  console.log(props);

  const deleteOrderHandler = (id) => {
    props.getOrderId(id);
  };

  const renderOrderList = props.orders.map((order) => {
    return (
      <OrderCard
      order={order}
        clickHander={deleteOrderHandler}
        key={order.id}
      />
    );
  });

  return (
    <div className="main">
       <br/>
      <h2>
        Orders List
        <Link to="/orders/add">
          <button className="ui button blue right">Add Order</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderOrderList}</div>
    </div>
  );
};

export default OrderList;
