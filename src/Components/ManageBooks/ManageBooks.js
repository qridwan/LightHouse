import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./ManageBooks.css";

const ManageBooks = () => {
    let [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://lighthouse-222.herokuapp.com/allbooks")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false) 
        setBooks(data)});
  }, [books]);

  function handleDelete(id, event) {
    fetch(`https://lighthouse-222.herokuapp.com/deleteBook/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log("Delete Confirmed");
        }
      });
  }
  return (
    <div  className="table-field">
        
      <table className="table container mr-2">
        <thead style={{width: '90%'}} >
          <tr className="bg-light ">
            <th scope="col">Book</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((obj) => (
            <tr className="text-black" key={obj._id}>
              <th scope="row">
                
                <img
                  src={obj.image}
                  alt="img"
                  height="80px"
                  className="d-block"
                  style={{margin: "0 15px"}}
                />
                {obj.name}
              </th>
              <td>{obj.author} </td>
              <td>$ {obj.price} </td>
              <td>
                <IconButton
                  onClick={() => {
                    handleDelete(obj._id);
                  }}
                  aria-label="delete"
                  className="text-danger"
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center m-4"> {loading && <ClipLoader color="purple"> loading={loading} size={300} ></ClipLoader>}</div>
    </div>
  );
};

export default ManageBooks;
