import React from "react";
import "./AdminPages.css";
import { Link } from "react-router-dom";
const AdminPage = () => {
  return (
    <div className="admin-div">
      <div className="admins-div">
        <h2> Admin Roles</h2>
        <div className="button-div">
          <button>
            <Link to="/CreateLibraryForm">Add User/Create Library</Link>
          </button>
          <br />
          <br />
          <button>
            <Link to="/AddBookForm">Add Book</Link>
          </button>
          <br />
          <br />
          <button>
            <Link to="/RemoveBookForm">Remove Book</Link>
          </button>
          <br />
          <br />
          <button>
            <Link to="/UpdateBookForm">Update Book</Link>
          </button>
          <br />
          <br />
          <button>
            <Link to="/IssueRequestList">Issue List</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
