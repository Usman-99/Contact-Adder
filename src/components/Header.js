import React from 'react';
import logo from "./logo.png";

export default function Header (props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img className='py-0 px-0 mx-0 my-0' src={logo} alt="Logo" width="60" height="40" class="d-inline-block align-text-top"/>
      </a>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
            {props.title}
            </a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  )
}
Header.defaultProps={
    title:'Add any title'
}
