import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import AddBook from '../AddBook/AddBook';
import './Admin.css';


const Admin = () => { 
    const [user, setUser] = useContext(UserContext)
    const [condition, setCondition] = useState({goto: ""})
    const gotoAddBooks = () => {
        setCondition({goto: "addBook"})
    }
    const gotoManageBooks = () => {
        setCondition({goto: "manageBook"})
    }
    return (
        <>
        <div class="sidebar-container">
  <div class="sidebar-logo">
    Admin Panel
  </div> 
  <ul class="sidebar-navigation">
    <li  onClick={gotoManageBooks}>
      <h6 >
         ManageBooks
      </h6>
    </li>
    <li onClick={gotoAddBooks}>
      <h6 >
         Add New Books
      </h6>
    </li>
    <li>
      <h6 >
         Edit Books
      </h6>
    </li>
  </ul>
</div>

<div class="content-container">
    <div className="text-center text-white">
            <img src={user.photo} alt="Snap" height="100" className="border rounded"></img>
            <h4>Hi {user.name}! <br/><span  className="text-warning">WelCome to Admin panel</span></h4></div>
    
    {
        condition.goto === 'addBook' && <AddBook />
    }
</div>
</>
    );
};

export default Admin;