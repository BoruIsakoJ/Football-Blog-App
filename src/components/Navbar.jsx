import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-2">
      <div className="container-fluid">
        <Link
          style={{ fontWeight: "900", fontSize: "20px" }}
          className="navbar-brand d-flex align-items-center title"
          to="/"
        >
          FanFolio
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;