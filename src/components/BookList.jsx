import React, { useState, useEffect } from "react";
import "./BookListcss.css";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8088/");
        setBooks(response.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch books");
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className="mainbook-list">
      <br />
      <h2>Book Details</h2>
      {error && <p>{error}</p>}
      <ul>
        {books.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
