import React from "react";
import { Link } from "react-router-dom";
import "./StartingPages.css";

const StartingPage = () => {
  return (
    <div className="main-pages">
      <div className="main-divs">
        <h1>Library Management</h1>

        <button>
          <Link to="/OTPForm">Admin Page</Link>
        </button>
        <br />
        <br />
        <button>
          {" "}
          <Link to="/OTPFormes">User Page</Link>
        </button>
        <br />
        <br />
        <button>
          <Link to="/BookList">Book Lists</Link>
        </button>
      </div>
    </div>
  );
};

export default StartingPage;
