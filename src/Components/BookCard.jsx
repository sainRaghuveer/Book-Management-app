import React from 'react';
import {Link} from "react-router-dom";


const BookCard = ({book}) => {


  return (
    <div style={{border:"1px solid gray"}}>
        <Link to={`/books/${book.id}`}><img src="https://s3.youthkiawaaz.com/wp-content/uploads/2011/04/07004029/the-secret.jpg" alt={book.book_name} 
        width="100%"
        />
        </Link>
        <h3>{book.book_name}</h3>
        <p>Author: {book.author}</p>
        <p>Category: {book.category}</p>
        <p>Year: {book.release_year}</p>
        <Link to={`/books/${book.id}/edit`}>
        <button>Edit</button>
        </Link>
    </div>
  )
}

export default BookCard