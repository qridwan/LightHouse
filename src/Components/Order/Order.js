import React, { useContext, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { UserContext } from "../../App";
import './Order.css';


const Order = () => {
  let [loading, setLoading] = useState(true);
  const [user] = useContext(UserContext);
  const mail = user.email;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://lighthouse-222.herokuapp.com/order/" + mail)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setOrders(data)});
  }, []);
  return (
    <div className="order text-light pb-5">
      <div className="container">
        <h3 className="p-3 text-center">{user.name}, previously you ordered,</h3>
      </div>
      <table className="table container text-light">
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
            <tr key={obj._id}>
              <th scope="row">{obj.name}</th>
              <td>{obj.author} </td>
              <td>$ {obj.price} </td>
              <td> {obj.date} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center m-4"> {loading && <ClipLoader color="white"> loading={loading} size={300} ></ClipLoader>}</div>
    </div>
  );
};

export default Order;
