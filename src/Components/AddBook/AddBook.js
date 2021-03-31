import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const { register, handleSubmit} = useForm();
  const [imageUrl, setImageUrl] = useState(null);

const [bookAdded, setbookAdded] = useState(false);

  const onSubmit = (data) => {
 const BookData = {
     name: data.name,
     author: data.author,
     price: data.cost,
     image: imageUrl
 }
 console.log(BookData)
 const url = `http://localhost:4000/addBook`;
    
 fetch(url, {
   method: 'POST', 
   headers: {
     'content-type': 'application/json'
   },
   body: JSON.stringify(BookData)
 })
 .then(res => {
     
   if (res) {
       setbookAdded(true)
   }

})
};

  const handleImage = (event) => {
    const imageData = new FormData();
    imageData.set("key", "b26389c1040d4906f07c920d5340a088");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.display_url)
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="bg-info text-center p-5">
      {
          !bookAdded && <h1 className="text-warning">Add New Book!!</h1>
      }
      <div className="d-flex justify-content-center align-items-center">
        {
            bookAdded ?<> <h1 className="text-warning">New Book Added Successfully!</h1>
            <div className="btn btn-primary" onClick={()=>{
              setbookAdded(false)
            }}>Add Book </div></>
             : 
            <form className="" onSubmit={handleSubmit(onSubmit)}>
    <input className="form-control" name="name" placeholder="name" ref={register} required />
    <input className="form-control" name="author" placeholder="author" ref={register} required/>
    <input className="form-control" name="cost" placeholder="price" ref={register} required />
    <br />
    <input className="text-light form-control-file"  name="exampleRequired" type="file" onChange={handleImage} required/>
    <br /> <input className="form-control bg-primary text-light" type="submit" />
  </form>
        }
      </div>
    </div>
  );
};

export default AddBook;