import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';



const Home = () => {
    
    const [books, setBooks]= useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/allbooks')
        .then(response => response.json())
        .then(data => setBooks(data))
    },[])
    return (
        <>
    <div className="container d-flex justify-content-center">
    <div className="row">
            {books.map(obj => <BookCard info={obj} key={obj._id}></BookCard>)}
        </div>
    </div>
        </>
    );
};

export default Home;