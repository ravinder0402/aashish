import React from "react";
import { Link } from "react-router-dom";
import "./Userpagecss.css";
const UserPage = () => {
  return (
    <div className="user-div">
      <div className="users-div">
        <div className="userbutton-div">
          <h2> User Roles</h2>
          <button>
            <Link to="/SearchBookForm">Search Book</Link>
          </button>
          <br />
          <br />
          <button>
            <Link to="/RaiseIssueRequestForm">Raise Request</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
