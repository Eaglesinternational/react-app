import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className=" navbar navbar-expand-lg bg-success navb fixed-top">
  <div className="container">
    <Link className="navbar-bran hello" to="#">SBIA</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className=" hello" aria-current="page" to="/">Home</Link>
        <Link className=" hello " to="/abouts">Abouts</Link>
        <Link className="hello" to="/contact">Contact</Link>
        <Link className="hello" to="/apply">Blogs</Link>
        <Link className="hello" to="/form">Form</Link>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
