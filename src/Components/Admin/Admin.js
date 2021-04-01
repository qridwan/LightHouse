import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import TuneIcon from '@material-ui/icons/Tune';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import AddBook from '../AddBook/AddBook';
import ManageBooks from '../ManageBooks/ManageBooks';
import './Admin.css';

const Admin = () => { 
    const [user] = useContext(UserContext)
    const [condition, setCondition] = useState({goto: ""})
    const gotoAddBooks = () => {
        setCondition({goto: "addBook"})
    }
    const gotoManageBooks = () => {
        setCondition({goto: "manageBook"})
    }
    return (
        <>
        <div className="sidebar-container">
  <div className="sidebar-logo">
    <img src={user.photo} alt="Snap" height="80" className="d-block border rounded"></img>
    <h5> {user.name} <VerifiedUserOutlinedIcon className="text-success"/> </h5>
  </div> 
  <ul className="sidebar-navigation">
    <li  onClick={gotoManageBooks}>
      <h6 >
      <TuneIcon/>   Manage Books
      </h6>
    </li>
    <li onClick={gotoAddBooks}>
      <h6 >
      <AddIcon/>  Add New Books
      </h6>
    </li>
    <li>
      <h6 >
      <EditIcon/>   Edit Books
      </h6>
    </li>
  </ul>
</div>

<div className="content-container">
    {
        condition.goto === 'manageBook' && <ManageBooks />
    }
    {
        condition.goto === 'addBook' && <AddBook />
    }
</div>
</>
    );
};

export default Admin;