import React, { useState } from "react";
import axios from "axios";
import "./RaiseIssueRequestFormcss.css";

const RaiseIssueRequestForm = () => {
  const [formData, setFormData] = useState({
    book_id: "",
    email: "",
    successMessage: "",
    errorMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure both fields are filled before submitting
      if (!formData.book_id || !formData.email) {
        throw new Error("Please fill in both Book ID and Email fields.");
      }

      const response = await axios.post(
        "http://localhost:8088/issue/request",
        formData
      );
      setFormData({
        ...formData,
        successMessage: `Issue request for Book ID ${formData.book_id} raised successfully.`,
        errorMessage: "",
      });
    } catch (err) {
      setFormData({
        ...formData,
        successMessage: "",
        errorMessage:
          err.response?.data.error || "Failed to raise issue request.",
      });
    }
  };

  return (
    <div className="raisemain-div">
      <div className="raise-div">
        <h2>Raise Issue Request</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="book_id"
            placeholder="Book ID"
            value={formData.book_id}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <button type="submit">Raise Request</button>
        </form>
        {formData.successMessage && <p>{formData.successMessage}</p>}
        {formData.errorMessage && <p>{formData.errorMessage}</p>}
      </div>
    </div>
  );
};

export default RaiseIssueRequestForm;
