import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <sapan className="badge badge-pill badge-secondary">
          {totalCounters}
        </sapan>
      </a>
    </nav>
  );
};

export default NavBar;
