import React from 'react';

import { Outlet } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
            <a className="navbar-brand" href="#">
              <img src="https://iweb.tatthanh.com.vn/pic/3/blog/images/image(1065).png" alt="" width="80px" className="d-inline-block align-text-middle"/>
              <p>MY BRAND NAME</p>
            </a>           
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item list-group-item-action text-center">
                <Link to="/">Home</Link>
              </li>
              <li className="list-group-item list-group-item-action text-center">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="list-group-item list-group-item-action text-center">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-light" type="submit">Search</button>
            </form>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
