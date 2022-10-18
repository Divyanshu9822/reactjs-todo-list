import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [collapse, setcollapse] = useState(true);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <Link className="navbar-brand mx-4" to="/">Todo List</Link>
      <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" onClick={() => {setcollapse(collapse => !collapse)}}></span>
      </button>

      <div className={collapse?"collapse navbar-collapse":"navbar-collapse"} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="active nav-item mx-4">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item mx-4">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar