import React, { useState } from "react";
import axios from "axios";
import "./SearchBookFormcss.css";

const SearchBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    book: null,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8088/search/book",
        formData
      );
      if (response.data) {
        setFormData({ ...formData, book: response.data, error: "" });
      } else {
        setFormData({ ...formData, book: null, error: "No books found" });
      }
    } catch (err) {
      setFormData({
        ...formData,
        book: null,
        error: err.response?.data.error || "Failed to search book",
      });
    }
  };
  return (
    <div className="mainsearch-div">
      <div className="search-div">
        <h2> Search Book</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="publisher"
            placeholder="Publisher"
            value={formData.publisher}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit">Search</button>
        </form>
        {formData.error && <p>{formData.error}</p>}
        {formData.book && (
          <div>
            <h3>Search Result:</h3>
            <div>
              <p>Title:{formData.book.title}</p>
              <p>Author:{formData.book.authors}</p>
              <p>Publisher:{formData.book.publisher}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBookForm;
