import React, {useEffect} from 'react'
import BookCard from "./BookCard";
import {useDispatch, useSelector} from "react-redux";
import { getBooks } from '../Redux/Books/action';
import styles from "../Styles/BooksList.module.css";
import {useLocation, useSearchParams} from "react-router-dom";

const BooksList = () => {
    const dispatch=useDispatch();
    const books = useSelector((store)=>{
        return store.bookReducer.books
    });

    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();
    console.log("location", location);

    useEffect(()=>{
        const order=searchParams.get("order")
        let paramObj={
            params:{
                category:searchParams.getAll("category"),
                _sort:order && "release_year",
                _order:order,
            }
        };
        dispatch(getBooks(paramObj));
    },[location.search]);

  return (
    <div  className={styles.Container}>
        {books.length>0 && books.map((el)=>{
            return <BookCard
                key={el.id}
                book={el}
                />
        })}
    </div>
  )
}

export default BooksList