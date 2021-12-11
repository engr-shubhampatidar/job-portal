import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/shortlist">
        <p>Shortlisted</p>
      </Link>
      <Link to="/rejectlist">
        <p>Rejected</p>
      </Link>
      <Link to="/candidates">
        <p>Candidates</p>
      </Link>
    </div>
  );
}
