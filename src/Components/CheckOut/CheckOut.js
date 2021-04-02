import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Checkout.css";

const CheckOut = () => {
  const [user] = useContext(UserContext);
  const { id } = useParams();

  const [bookInfo, setBookInfo] = useState({});
  useEffect(() => {
    fetch("https://lighthouse-222.herokuapp.com/book/" + id)
      .then((res) => res.json())
      .then((data) => setBookInfo(data));
  }, []);
  const { name, price, author } = bookInfo;
  const totalCost = +price + 20 + +price * 0.1;

  //for conditional rendering
  const [placeOrder, setPlaceOrder] = useState(false);

  const handleOrder = () => {
    const dateFormat = require("dateformat");
    const now = new Date();
    const orderedDate = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM TT");
    const orderInfo = {
      ...user,
      name: name,
      price: price,
      author: author,
      totalCost: totalCost,
      date: orderedDate,
    };

    const url = `https://lighthouse-222.herokuapp.com/placeOrder`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    }).then((res) => {
      console.log("Order Confirmed");
      if (res) {
        setPlaceOrder(true);
      }
    });
  };

  return !placeOrder ? (
    <div className="checkout">
      <div className="pt-2 row text-center">
        <div className="col">
          <h3 className="text-light font-weight-bolder">
            Hello {user.name}! <br />
            <span className=""> Checkout Your Selected Item</span>
          </h3>
        </div>
      </div>
      <table className="table container text-light">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Description</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{name}</td>

            <td>$ {price} </td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td colSpan="1"> ✔Shipping</td>
            <td>$ 20</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td colSpan="1">Total Cost (including 10% vat)</td>
            <td>${totalCost}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td colSpan="1">
              <Button
                onClick={handleOrder}
                variant="contained"
                color="secondary"
              >
                Place Order
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div>
      <div className="mt-5 p-5 row text-center">
        <div className="col">
          <h3 className="text-success font-weight-bolder">
            Congrates! <br />
            <span className="text-dark h5 font-weight-bold text-muted">
              {" "}
              Very soon We will contact With You! <br />
              Visit to the 'ORDER' page, so that you can find your order list.
            </span>
          </h3>
          <Button variant="contained" className="mr-2" color="secondary">
            <Link
              className="text-white"
              style={{ textDecoration: "none" }}
              to="/order"
            >
              Go To ORDER
            </Link>
          </Button>
          <Button variant="contained" className="ml-2" color="primary">
            <Link
              className="text-white"
              style={{ textDecoration: "none" }}
              to="/"
            >
              BACK To home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
