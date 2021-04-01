import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import BookCard from '../BookCard/BookCard';


const Home = () => {
    let [loading, setLoading] = useState(true);
    const [books, setBooks]= useState([])
   
    useEffect(()=>{
        fetch('https://lighthouse-222.herokuapp.com/allbooks')
        .then(response => response.json())
        .then(data => {
            setLoading(false)
            setBooks(data)
        })
    },[])
    
    return (
        <>
        
    <div className="container ">
        <div className="text-center m-4"> {loading && <ClipLoader color="purple"> loading={loading} size={300} ></ClipLoader>}</div>
   
    <div className="row d-flex justify-content-center">
            {books.map(obj => <BookCard info={obj} key={obj._id}></BookCard>)}
        </div>
    </div>
        </>
    );
};

export default Home;