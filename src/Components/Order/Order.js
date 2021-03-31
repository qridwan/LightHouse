import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

const Order = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  const mail = user.email;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/order/" + mail)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
  return (
    <div>
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">Books</th>
            <th scope="col">Authors</th>
            <th scope="col">Prices</th>
            <th scope="col">Ordered Dates & Time</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((obj) => (
            <tr>
              <th scope="row">{obj.name}</th>
              <td>{obj.author} </td>
              <td>$ {obj.price} </td>
              <td> {obj.date} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
