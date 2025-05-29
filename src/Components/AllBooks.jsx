import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AllBooks = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBooks();
    }, [])

    const fetchBooks = async () => {

        const res = await axios.get(`${process.env.REACT_API}/api/books`)
        console.log(res.data)
        setBooks(res.data)
        setLoading(false)
    }

    const handleDelete = async (id) => {
        console.log("deleting");
        const res = await axios.delete(`${process.env.REACT_API}/api/books/${id}`)
        console.log(res)
        fetchBooks();
    }

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h1>All Books</h1>
            <ul>
                {books.map((book => (
                    <div key={book._id}>
                        <p>Book Name: {book.title}</p>
                        <p>Author Name: {book.author}</p>
                        <p>Year: {book.year}</p>
                        <button
                            onClick={() => handleDelete(book._id)}
                        >
                            Delete
                        </button>
                        <br />

                    </div>
                )))}
            </ul>
        </div>
    )
}

export default AllBooks
