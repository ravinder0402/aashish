import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartingPage from "./components/StartingPage";
import OTPForm from "./OTPForm";
import AdminPage from "./components/AdminPage";
import CreateLibraryForm from "./components/CreateLibraryForm";
import RemoveBookForm from "./components/RemoveBookForm";
import AddBookForm from "./components/AddBookForm";
import UpdateBookForm from "./components/UpdateBookForm";
import OTPFormes from "./OTPFormes";
import UserPage from "./components/UserPage";
import SearchBookForm from "./components/SearchBookForm";
import RaiseIssueRequestForm from "./components/RaiseIssueRequestForm";
import BookList from "./components/BookList";
import IssueRequestList from "./components/IssueRequestList";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route index element={<StartingPage />}></Route>
          <Route path="OTPForm" element={<OTPForm />} />
          <Route path="OTPFormes" element={<OTPFormes />} />
          <Route path="AdminPage" element={<AdminPage />} />
          <Route path="CreateLibraryForm" element={<CreateLibraryForm />} />
          <Route path="RemoveBookForm" element={<RemoveBookForm />} />
          <Route path="AddBookForm" element={<AddBookForm />} />
          <Route path="UpdateBookForm" element={<UpdateBookForm />} />
          <Route path="UserPage" element={<UserPage />} />
          <Route path="SearchBookForm" element={<SearchBookForm />} />
          <Route path="BookList" element={<BookList />} />
          <Route
            path="RaiseIssueRequestForm"
            element={<RaiseIssueRequestForm />}
          />
          <Route path="IssueRequestList" element={<IssueRequestList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
