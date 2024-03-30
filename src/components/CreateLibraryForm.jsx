import React, { useState } from "react";
import axios from "axios";
import "./CreateLibracss.css";

const CreateLibraryForm = () => {
  const [formData, setFormData] = useState({
    library_name: "",
    owner_name: "",
    owner_email: "",
    owner_phone: "",
    owner_role: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8088/libraries",
        formData
      );
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setMessage("");
      setError(err.response.data.error);
    }
  };

  return (
    <div className="createmain-div">
      <div className="create-div">
        <h2>Create Library</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="library_name"
            placeholder="Library Name"
            value={formData.library_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="owner_name"
            placeholder="Owner Name"
            value={formData.owner_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="owner_email"
            placeholder="Owner Email"
            value={formData.owner_email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="owner_phone"
            placeholder="Owner Phone"
            value={formData.owner_phone}
            onChange={handleChange}
            required
          />
          <select
            name="owner_role"
            value={formData.owner_role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Reader">Reader</option>
          </select>
          <button type="submit">Create Library</button>
        </form>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default CreateLibraryForm;
