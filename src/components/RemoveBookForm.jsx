import React, { useState } from "react";
import axios from "axios";
import "./RemoveBook.css";

const RemoveBookForm = () => {
  const [isbn, setIsbn] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setIsbn(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete("http://localhost:8088/remove-book", {
        data: { isbn: isbn },
      });
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setMessage("");
      setError("Failed to remove book.");
    }
  };

  return (
    <div className="remove-div">
      <div className="ash">
        <h2>Remove Book</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            value={isbn}
            onChange={handleChange}
            required
          />
          <br />

          <button type="submit">Remove Book</button>
        </form>
        <div className="message-div">
          <h1>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default RemoveBookForm;
