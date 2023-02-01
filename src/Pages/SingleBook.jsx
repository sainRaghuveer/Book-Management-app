import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import { useEffect } from 'react';
import { useState } from 'react';
import BookCard from '../Components/BookCard';

const SingleBook = () => {

    const {id} = useParams();
    //we can fetch data 
    //or we can use store
    const books = useSelector((store)=>store.bookReducer.books);
    const [book, setBook] = useState({});

    useEffect(()=>{
        let bookData = books.find((el)=>el.id === +id)
        bookData && setBook(bookData);
    },[]);
   
  return (
    <div>
        <h1>Single Book : {id}</h1>
    <BookCard book={book}/>
    </div>
  )
}

export default SingleBook