import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../../api/orders";
import "../App.css";
import AddOrder from "./AddOrder";
import OrderList from "./OrderList";
import OrderDetail from "./OrderDetail";
import EditOrder from "./EditOrder";

function OrdersController() {
  const [orders, setOrders] = useState([]);

  const retrieveOrders = async () => {
    const response = await api.get();
    return response.data;
  };

  const addOrderHandler = async (order) => {
    console.log(order);
    const request = {
      id: uuid(),
      ...order,
    };

    const response = await api.post("/", request);
    console.log(response);
    setOrders([...orders, response.data]);
  };

  const updateOrderHandler = async (order) => {
    const response = await api.put(`${order.id}`, order);
    const { id } = response.data;
    setOrders(
      orders.map((order) => {
        return order.id === id ? { ...response.data } : order;
      })
    );
  };

  const removeOrderHandler = async (id) => {
    await api.delete(`${id}`);
    const newOrderList = orders.filter((order) => {
      return order.id !== id;
    });

    setOrders(newOrderList);
  };

  useEffect(() => {
    const getAllOrders = async () => {
      const allOrders = await retrieveOrders();
      if (allOrders) setOrders(allOrders);
    };

    getAllOrders();
  }, []);

  useEffect(() => {
  }, [orders]);

  return (
    <div className="ui container">
      <Router>    
        <Switch>
          <Route
            path="/orders"
            exact
            render={(props) => (
              <OrderList
                {...props}
                orders={orders}
                getOrderId={removeOrderHandler}
              />
            )}
          />
          <Route
            path="/orders/add"
            render={(props) => (
              <AddOrder {...props} addOrderHandler={addOrderHandler} />
            )}
          />

          <Route
            path="/orders/edit"
            render={(props) => (
              <EditOrder
                {...props}
                updateOrderHandler={updateOrderHandler}
              />
            )}
          />

          <Route path="/orders/:id" component={OrderDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default OrdersController;
