import React, { useState, useEffect } from "react";
import axios from "axios";
import "./IssueRequestListcss.css";

const IssueRequestList = () => {
  const [issueRequests, setIssueRequests] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchIssueRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8088/list-issue-request"
        );
        setIssueRequests(response.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch issue requests");
      }
    };

    fetchIssueRequests();
  }, []);

  return (
    <div className="mainissue-div">
      <br />
      <h2>Issue Requests</h2>
      {error && <p>{error}</p>}
      <ul>
        {issueRequests.map((request, index) => (
          <li key={index}>
            Request ID: {request.req_id}, Reader ID: {request.reader_id}, Book
            ID: {request.book_id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueRequestList;
