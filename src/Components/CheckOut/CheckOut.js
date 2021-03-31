import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';


const CheckOut = () => {
    const [user] = useContext(UserContext);
    const {id} = useParams();
    
    const [bookInfo, setBookInfo] = useState({})
    
    useEffect(()=>{
      fetch('http://localhost:4000/book/'+id)
      .then(res => res.json())
      .then(data => setBookInfo(data))
    },[])

    const {name, author, photo,price} = bookInfo;
    return (
        <div>
<div className="mt-5 row text-center">
    <div className="col">
        <h3 className="text-success font-weight-bolder">Hello {user.name}! <br/>
        <span className="text-primary"> Checkout Your Selected Item</span></h3>
    </div>
</div>
         <table class="table container">
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
      <td>{name}
      </td>
      
      <td>$ {price} </td>
    </tr>
    
    <tr>
      <th scope="row"></th>
      <td colspan="1"> ✔Shipping</td>
      <td>$ 20</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td colspan="1">Total Cost (including 10% vat)</td>
      <td>${+price + 20 + (+price*.1)}</td>
    </tr>
    <tr>
    <th scope="row"></th>
    <td></td>
    <td colspan="1">
    <Button variant="contained" color="secondary">
  Place Order
</Button>
    </td>
    </tr>
  </tbody>
</table>
        </div>
    );
};

export default CheckOut;