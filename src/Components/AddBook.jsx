import axios from 'axios';
import React, { useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/books`, {
        title,
        author,
        year,
      });
      console.log(response);
      setTitle("")
      setAuthor("")
      setYear("")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
          <input
            type="text"
            name="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Author</label>
          <input
            type="text"
            name="Author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Year</label>
          <input
            type="text"
            name="Year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            padding: '10px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
