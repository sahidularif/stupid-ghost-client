import React from 'react';
import {Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Navbars = () => {
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-light" variant="dark" style={{ backgroundColor: '#2E3047' }}>
            <div class="container-fluid">
                <Navbar.Brand className="text-light" href="#home">Stupid-Ghoost</Navbar.Brand>
                <NavDropdown title={
                    <span className="text-light my-auto">Arif</span>
                } className="mes text-light navbar-light" id="collasible-nav-dropdown">
                    <NavDropdown.Item><Link to="/profile">Profile</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/createPost">Create new post</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Link to="/users">Users</Link></NavDropdown.Item>
                </NavDropdown>
            </div>
        </nav>
    );
};

export default Navbars;